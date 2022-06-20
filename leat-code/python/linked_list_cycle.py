# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import Optional


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        
        if not head:
            return False
        
        slow_pointer = head
        fist_pointer = head
        
        while slow_pointer and slow_pointer.next and fist_pointer and fist_pointer.next:
            tmp = fist_pointer.next
            if tmp == head:
                return True

            if tmp:
                fist_pointer = tmp.next
            else:
                return False
            
            if fist_pointer == head:
                return True

            if fist_pointer == slow_pointer:
                return True
            slow_pointer = slow_pointer.next

            if slow_pointer == head:
                return True
    
        return False