<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MeetingSceneData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MeetingSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct MeetingSceneData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/MeetingSceneData.cs`

## Overview

`MeetingSceneData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `CultureString` | `public string CultureString { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |

## Usage Example

```csharp
// Typical usage of MeetingSceneData (Data)
new MeetingSceneData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)