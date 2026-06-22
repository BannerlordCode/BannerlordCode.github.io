<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEncounterGameMenuModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs`

## 概述

`DefaultEncounterGameMenuModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultEncounterGameMenuModel>(new MyDefaultEncounterGameMenuModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetEncounterMenu
```csharp
public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)
```

### GetRaidCompleteMenu
```csharp
public override string GetRaidCompleteMenu()
```

### GetNewPartyJoinMenu
```csharp
public override string GetNewPartyJoinMenu(MobileParty newParty)
```

### GetGenericStateMenu
```csharp
public override string GetGenericStateMenu()
```

### IsPlunderMenu
```csharp
public override bool IsPlunderMenu(string gameMenuId)
```

## 使用示例

```csharp
// DefaultEncounterGameMenuModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultEncounterGameMenuModel>(new MyDefaultEncounterGameMenuModel());
```

## 参见

- [完整类目录](../catalog)