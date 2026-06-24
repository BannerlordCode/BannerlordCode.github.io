<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameSceneDataManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameSceneDataManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameSceneDataManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`

## Overview

`GameSceneDataManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameSceneDataManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameSceneDataManager Instance { get; }` |
| `SingleplayerBattleScenes` | `public MBReadOnlyList<SingleplayerBattleSceneData> SingleplayerBattleScenes { get; }` |
| `ConversationScenes` | `public MBReadOnlyList<ConversationSceneData> ConversationScenes { get; }` |
| `MeetingScenes` | `public MBReadOnlyList<MeetingSceneData> MeetingScenes { get; }` |

## Key Methods

### LoadSPBattleScenes
`public void LoadSPBattleScenes(string path)`

**Purpose:** Loads `s p battle scenes` data.

### LoadConversationScenes
`public void LoadConversationScenes(string path)`

**Purpose:** Loads `conversation scenes` data.

### LoadMeetingScenes
`public void LoadMeetingScenes(string path)`

**Purpose:** Loads `meeting scenes` data.

## Usage Example

```csharp
var manager = GameSceneDataManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)