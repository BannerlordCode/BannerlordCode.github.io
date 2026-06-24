<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Segment`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Segment

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public class Segment`
**Base:** none
**File:** `TaleWorlds.PSAI/net/Segment.cs`

## Overview

`Segment` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `ThemeId` | `public int ThemeId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `Playcount` | `public int Playcount { get; }` |
| `MaxPreBeatMsOfCompatibleSnippetsWithinSameTheme` | `public int MaxPreBeatMsOfCompatibleSnippetsWithinSameTheme { get; }` |
| `Followers` | `public List<Follower> Followers { get; }` |
| `SnippetTypeBitfield` | `public int SnippetTypeBitfield { get; set; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### IsUsableAs
`public bool IsUsableAs(SegmentSuitability snippetType)`

**Purpose:** Handles logic related to `is usable as`.

### IsUsableOnlyAs
`public bool IsUsableOnlyAs(SegmentSuitability snippetType)`

**Purpose:** Handles logic related to `is usable only as`.

### ReturnSegmentWithLowestIntensityDifference
`public Segment ReturnSegmentWithLowestIntensityDifference(List<Segment> argSnippets)`

**Purpose:** Handles logic related to `return segment with lowest intensity difference`.

### CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible
`public bool CheckIfAtLeastOneDirectTransitionOrLayeringIsPossible(Soundtrack soundtrack, int targetThemeId)`

**Purpose:** Handles logic related to `check if at least one direct transition or layering is possible`.

### GetStringFromSegmentSuitabilities
`public static string GetStringFromSegmentSuitabilities(int snippetTypeBitfield)`

**Purpose:** Gets the current value of `string from segment suitabilities`.

## Usage Example

```csharp
var value = new Segment();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)