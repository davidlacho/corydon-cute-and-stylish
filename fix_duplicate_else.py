#!/usr/bin/env python3
"""
Fix duplicate else blocks in blog posts
"""

import re
from pathlib import Path

def fix_duplicate_else(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Find and fix duplicate else blocks
    # Pattern: } else { ... setTimeout(initBlogPostApp, 100); } } else { ... setTimeout(initBlogPostApp, 100); } }
    pattern = r'(\} else \{\s*setTimeout\(initBlogPostApp, 100\);\s*\})\s*\}\s*else \{\s*setTimeout\(initBlogPostApp, 100\);\s*\}\s*\}'
    
    replacement = r'\1\n        }'
    
    if re.search(pattern, content, re.DOTALL):
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dir = Path(__file__).parent
    blog_files = list(base_dir.glob('blog-*.html'))
    
    fixed = 0
    for blog_file in sorted(blog_files):
        if fix_duplicate_else(blog_file):
            fixed += 1
            print(f"Fixed: {blog_file.name}")
    
    print(f"\nFixed {fixed} files")

if __name__ == '__main__':
    main()

