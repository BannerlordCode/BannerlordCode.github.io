<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Group`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Group

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** `public class Group : PsaiMusicEntity, ICloneable`
**Base:** `PsaiMusicEntity`
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.Editor/Group.cs`

## Overview

`Group` lives in `psai.Editor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.Editor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Segments` | `public List<Segment> Segments { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Serialization_Id` | `public int Serialization_Id { get; set; }` |
| `Serialization_ManuallyBlockedGroupIds` | `public List<int> Serialization_ManuallyBlockedGroupIds { get; set; }` |
| `Serialization_ManuallyLinkedGroupIds` | `public List<int> Serialization_ManuallyLinkedGroupIds { get; set; }` |
| `Serialization_ManualBridgeSegmentIds` | `public List<int> Serialization_ManualBridgeSegmentIds { get; set; }` |
| `ManualBridgeSnippetsOfTargetGroups` | `public HashSet<Segment> ManualBridgeSnippetsOfTargetGroups { get; set; }` |
| `ManuallyBlockedGroups` | `public HashSet<Group> ManuallyBlockedGroups { get; set; }` |
| `ManuallyLinkedGroups` | `public HashSet<Group> ManuallyLinkedGroups { get; set; }` |
| `Theme` | `public Theme Theme { get; set; }` |

## Key Methods

### GetClassString
`public override string GetClassString()`

**Purpose:** Gets the current value of `class string`.

### AddSegment
`public void AddSegment(Segment snippet)`

**Purpose:** Adds `segment` to the current collection or state.

### AddSegment
`public void AddSegment(Segment snippet, int index)`

**Purpose:** Adds `segment` to the current collection or state.

### RemoveSegment
`public void RemoveSegment(Segment snippet)`

**Purpose:** Removes `segment` from the current collection or state.

### HasAtLeastOneBridgeSegmentToTargetGroup
`public bool HasAtLeastOneBridgeSegmentToTargetGroup(Group targetGroup)`

**Purpose:** Checks whether the current object has/contains `at least one bridge segment to target group`.

### ContainsAtLeastOneManualBridgeSegmentForSourceGroup
`public bool ContainsAtLeastOneManualBridgeSegmentForSourceGroup(Group sourceGroup)`

**Purpose:** Handles logic related to `contains at least one manual bridge segment for source group`.

### ContainsAtLeastOneAutomaticBridgeSegment
`public bool ContainsAtLeastOneAutomaticBridgeSegment()`

**Purpose:** Handles logic related to `contains at least one automatic bridge segment`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetCompatibilitySetting
`public override CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)`

**Purpose:** Gets the current value of `compatibility setting`.

### GetCompatibilityType
`public override CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)`

**Purpose:** Gets the current value of `compatibility type`.

### SetAsParentGroupForAllSegments
`public void SetAsParentGroupForAllSegments()`

**Purpose:** Sets the value or state of `as parent group for all segments`.

### GetParent
`public override PsaiMusicEntity GetParent()`

**Purpose:** Gets the current value of `parent`.

### GetChildren
`public override List<PsaiMusicEntity> GetChildren()`

**Purpose:** Gets the current value of `children`.

### GetIndexPositionWithinParentEntity
`public override int GetIndexPositionWithinParentEntity(PsaiProject parentProject)`

**Purpose:** Gets the current value of `index position within parent entity`.

### Clone
`public override object Clone()`

**Purpose:** Handles logic related to `clone`.

### ShallowCopy
`public override PsaiMusicEntity ShallowCopy()`

**Purpose:** Handles logic related to `shallow copy`.

## Usage Example

```csharp
var value = new Group();
value.GetClassString();
```

## See Also

- [Complete Class Catalog](../catalog)