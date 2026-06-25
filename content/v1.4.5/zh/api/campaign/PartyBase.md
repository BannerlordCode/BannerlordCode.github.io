---
title: "PartyBase"
description: "PartyBase 的自动生成类参考。"
---
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`
**Base:** `IBattleCombatant`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/PartyBase.cs`

## 概述

`PartyBase` 位于 `TaleWorlds.CampaignSystem.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public CampaignVec2 Position { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SiegeEvent` | `public SiegeEvent SiegeEvent { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `MemberRoster` | `public TroopRoster MemberRoster { get; }` |
| `PrisonRoster` | `public TroopRoster PrisonRoster { get; }` |
| `ItemRoster` | `public ItemRoster ItemRoster { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DaysStarving` | `public float DaysStarving { get; set; }` |
| `RemainingFoodPercentage` | `public int RemainingFoodPercentage { get; set; }` |
| `Owner` | `public Hero Owner { get; }` |
| `MainParty` | `public static PartyBase MainParty { get; }` |
| `LevelMaskIsDirty` | `public bool LevelMaskIsDirty { get; }` |
| `Index` | `public int Index { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `CustomName` | `public TextObject CustomName { get; }` |
| `CustomBanner` | `public Banner CustomBanner { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `MapEventSide` | `public MapEventSide MapEventSide { get; set; }` |
| `OpponentSide` | `public BattleSideEnum OpponentSide { get; }` |
| `PartySizeLimit` | `public int PartySizeLimit { get; }` |
| `PrisonerSizeLimit` | `public int PrisonerSizeLimit { get; }` |
| `PrisonerHeroes` | `public IEnumerable<CharacterObject> PrisonerHeroes { get; }` |
| `NumberOfMenWithHorse` | `public int NumberOfMenWithHorse { get; }` |
| `EstimatedStrength` | `public float EstimatedStrength { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `IsVisualDirty` | `public bool IsVisualDirty { get; }` |

## 主要方法

### OnVisibilityChanged
`public void OnVisibilityChanged(bool value)`

**用途 / Purpose:** 在 visibility changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.OnVisibilityChanged(false);
```

### OnConsumedFood
`public void OnConsumedFood()`

**用途 / Purpose:** 在 consumed food 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.OnConsumedFood();
```

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner)`

**用途 / Purpose:** 为 custom owner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.SetCustomOwner(customOwner);
```

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party)`

**用途 / Purpose:** 判断当前对象是否处于 party under player command 状态或条件。

```csharp
// 静态调用，不需要实例
PartyBase.IsPartyUnderPlayerCommand(party);
```

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty()`

**用途 / Purpose:** 为 level mask is dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.SetLevelMaskIsDirty();
```

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated()`

**用途 / Purpose:** 在 level mask updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.OnLevelMaskUpdated();
```

### SetCustomName
`public void SetCustomName(TextObject name)`

**用途 / Purpose:** 为 custom name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.SetCustomName(name);
```

### SetCustomBanner
`public void SetCustomBanner(Banner banner)`

**用途 / Purpose:** 为 custom banner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.SetCustomBanner(banner);
```

### IsUnderPlayersCommand
`public bool IsUnderPlayersCommand(BattleSideEnum playerSide)`

**用途 / Purpose:** 判断当前对象是否处于 under players command 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.IsUnderPlayersCommand(playerSide);
```

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier)`

**用途 / Purpose:** 读取并返回当前对象中 number of healthy men of tier 的结果。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.GetNumberOfHealthyMenOfTier(0);
```

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

**用途 / Purpose:** 计算current strength的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.CalculateCurrentStrength();
```

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 custom strength 的结果。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.GetCustomStrength(side, context);
```

### GetShipsVersion
`public int GetShipsVersion()`

**用途 / Purpose:** 读取并返回当前对象中 ships version 的结果。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.GetShipsVersion();
```

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait)`

**用途 / Purpose:** 读取并返回当前对象中 number of men with 的结果。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.GetNumberOfMenWith(trait);
```

### AddPrisoner
`public int AddPrisoner(CharacterObject element, int numberToAdd)`

**用途 / Purpose:** 将 prisoner 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.AddPrisoner(element, 0);
```

### AddMember
`public int AddMember(CharacterObject element, int numberToAdd, int numberToAddWounded = 0)`

**用途 / Purpose:** 将 member 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.AddMember(element, 0, 0);
```

### AddPrisoners
`public void AddPrisoners(TroopRoster roster)`

**用途 / Purpose:** 将 prisoners 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.AddPrisoners(roster);
```

### AddMembers
`public void AddMembers(TroopRoster roster)`

**用途 / Purpose:** 将 members 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.AddMembers(roster);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.ToString();
```

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`

**用途 / Purpose:** 将 element to member roster 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
var result = partyBase.AddElementToMemberRoster(element, 0, false);
```

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index, int numberToAdd, int woundedCount = 0)`

**用途 / Purpose:** 将 to member roster element at index 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.AddToMemberRosterElementAtIndex(0, 0, 0);
```

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj, int numberToWound)`

**用途 / Purpose:** 调用 WoundMemberRosterElements 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.WoundMemberRosterElements(elementObj, 0);
```

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex, int numberToWound)`

**用途 / Purpose:** 调用 WoundMemberRosterElementsWithIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.WoundMemberRosterElementsWithIndex(0, 0);
```

### UpdateVisibilityAndInspected
`public void UpdateVisibilityAndInspected(CampaignVec2 fromPosition, float mainPartySeeingRange = 0f)`

**用途 / Purpose:** 重新计算并更新 visibility and inspected 的最新表示。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.UpdateVisibilityAndInspected(fromPosition, 0);
```

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty()`

**用途 / Purpose:** 为 as camera follow party 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.SetAsCameraFollowParty();
```

### SetVisualAsDirty
`public void SetVisualAsDirty()`

**用途 / Purpose:** 为 visual as dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.SetVisualAsDirty();
```

### OnVisualsUpdated
`public void OnVisualsUpdated()`

**用途 / Purpose:** 在 visuals updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyBase 实例
PartyBase partyBase = ...;
partyBase.OnVisualsUpdated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyBase partyBase = ...;
partyBase.OnVisibilityChanged(false);
```

## 参见

- [本区域目录](../)