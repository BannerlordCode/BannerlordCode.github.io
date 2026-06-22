<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterGameMenuModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**Base:** `MBGameModel<EncounterGameMenuModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EncounterGameMenuModel.cs`

## 概述

`EncounterGameMenuModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<EncounterGameMenuModel>(new MyEncounterGameMenuModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetEncounterMenu
```csharp
public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)
```

### GetRaidCompleteMenu
```csharp
public abstract string GetRaidCompleteMenu()
```

### GetNewPartyJoinMenu
```csharp
public abstract string GetNewPartyJoinMenu(MobileParty newParty)
```

### GetGenericStateMenu
```csharp
public abstract string GetGenericStateMenu()
```

### IsPlunderMenu
```csharp
public abstract bool IsPlunderMenu(string menuId)
```

## 使用示例

```csharp
// EncounterGameMenuModel (Model) 的典型用法
Game.Current.ReplaceModel<EncounterGameMenuModel>(new MyEncounterGameMenuModel());
```

## 参见

- [完整类目录](../catalog)