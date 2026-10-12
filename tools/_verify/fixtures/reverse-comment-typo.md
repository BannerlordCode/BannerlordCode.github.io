---
title: "MBEditor"
description: "Throwaway reverse control for rule 2. A genuinely misspelled, non-existent type name that appears ONLY inside a // comment must still be reported. NOT a content page."
---

# MBEditor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBEditor`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBEditor.cs`

## How to use

```csharp
using TaleWorlds.MountAndBlade;

public static class ReverseControl
{
    public static void Run()
    {
        // DEFECT (comment-only): XMBEditor does not exist anywhere in any tree.
        // Rule 2's "strip the first letter" variant resolves to MBEditor, which does
        // exist, so this MUST still be reported even though it only occurs in a comment.
        //
        // Contrast — prose in this same comment block must NOT be reported:
        // Returns null when the editor is off; VIRTUAL, FIELDS, MUST, NOTHING,
        // ONLY and BEFORE are English words, not type names.
        Debug.Print("no code here", 0);
    }
}
```

`XMBEditor` is a non-existent name that occurs only inside a `//` comment, and
rule 2's generated variant (`MBEditor`) does exist in the corpus. If the comment
filter ever becomes "skip comment lines", this stops being reported — which is
the blind spot this control exists to detect.
