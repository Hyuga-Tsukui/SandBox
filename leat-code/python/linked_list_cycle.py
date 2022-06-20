# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        
        if not head:
            return False
        
        slow_pointer = head
        fist_pointer = head.next
        
        while slow_pointer and fist_pointer and slow_pointer.next:
            if slow_pointer == fist_pointer:
                return True
            slow_pointer = slow_pointer.next 
            tmp = fist_pointer.next
            if tmp:
                fist_pointer = tmp.next
    
        return False