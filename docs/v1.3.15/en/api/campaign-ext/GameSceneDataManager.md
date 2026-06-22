<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameSceneDataManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameSceneDataManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameSceneDataManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`

## Overview

`GameSceneDataManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameSceneDataManager Instance { get; }` |
| `SingleplayerBattleScenes` | `public MBReadOnlyList<SingleplayerBattleSceneData> SingleplayerBattleScenes { get; }` |
| `ConversationScenes` | `public MBReadOnlyList<ConversationSceneData> ConversationScenes { get; }` |
| `MeetingScenes` | `public MBReadOnlyList<MeetingSceneData> MeetingScenes { get; }` |

## Key Methods

### LoadSPBattleScenes
```csharp
public void LoadSPBattleScenes(string path)
```

### LoadConversationScenes
```csharp
public void LoadConversationScenes(string path)
```

### LoadMeetingScenes
```csharp
public void LoadMeetingScenes(string path)
```

## Usage Example

```csharp
// Typical usage of GameSceneDataManager (Manager)
GameSceneDataManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)