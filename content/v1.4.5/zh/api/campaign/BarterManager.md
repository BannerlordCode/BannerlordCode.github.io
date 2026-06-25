---
title: "BarterManager"
description: "BarterManager 的自动生成类参考。"
---
# BarterManager

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem/BarterManager.cs`

## 概述

`BarterManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BarterManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; set; }` |

## 主要方法

### BarterContextInitializer
`public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BarterContextInitializer 对应的操作。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.BarterContextInitializer(barterable, args, null);
```

### BarterCloseEventDelegate
`public delegate void BarterCloseEventDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BarterCloseEventDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.BarterCloseEventDelegate();
```

### BarterBeginEventDelegate
`public delegate void BarterBeginEventDelegate(BarterData args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BarterBeginEventDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.BarterBeginEventDelegate(args);
```

### BeginPlayerBarter
`public void BeginPlayerBarter(BarterData args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeginPlayerBarter 对应的操作。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.BeginPlayerBarter(args);
```

### StartBarterOffer
`public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)`

**用途 / Purpose:** **用途 / Purpose:** 启动barter offer流程或状态机。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.StartBarterOffer(offerer, other, offererParty, otherParty, null, null, 0, false, null);
```

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)`

**用途 / Purpose:** **用途 / Purpose:** 执行 ai barter 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.ExecuteAiBarter(faction1, faction2, faction1Hero, faction2Hero, barterable);
```

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)`

**用途 / Purpose:** **用途 / Purpose:** 执行 ai barter 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.ExecuteAiBarter(faction1, faction2, faction1Hero, faction2Hero, baseBarterables);
```

### ExecuteAIBarter
`public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)`

**用途 / Purpose:** **用途 / Purpose:** 执行 a i barter 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.ExecuteAIBarter(barterData, faction1, faction2, faction1Hero, faction2Hero);
```

### Close
`public void Close()`

**用途 / Purpose:** **用途 / Purpose:** 关闭当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.Close();
```

### IsOfferAcceptable
`public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 offer acceptable 状态或条件。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.IsOfferAcceptable(args, hero, party);
```

### GetOfferValueForFaction
`public float GetOfferValueForFaction(BarterData barterData, IFaction faction)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 offer value for faction 的结果。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.GetOfferValueForFaction(barterData, faction);
```

### GetOfferValue
`public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 offer value 的结果。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.GetOfferValue(selfHero, selfParty, offererParty, offeredBarters);
```

### ApplyAndFinalizePlayerBarter
`public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**用途 / Purpose:** **用途 / Purpose:** 将 and finalize player barter 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.ApplyAndFinalizePlayerBarter(offererHero, otherHero, barterData);
```

### CancelAndFinalizePlayerBarter
`public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 cel and finalize player barter 的前置条件。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
barterManager.CancelAndFinalizePlayerBarter(offererHero, otherHero, barterData);
```

### CanPlayerBarterWithHero
`public bool CanPlayerBarterWithHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player barter with hero 的前置条件。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.CanPlayerBarterWithHero(hero);
```

### InitializeMarriageBarterContext
`public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** **用途 / Purpose:** 为 marriage barter context 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.InitializeMarriageBarterContext(barterable, args, obj);
```

### InitializeJoinFactionBarterContext
`public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** **用途 / Purpose:** 为 join faction barter context 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.InitializeJoinFactionBarterContext(barterable, args, obj);
```

### InitializeMakePeaceBarterContext
`public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** **用途 / Purpose:** 为 make peace barter context 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.InitializeMakePeaceBarterContext(barterable, args, obj);
```

### InitializeSafePassageBarterContext
`public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** **用途 / Purpose:** 为 safe passage barter context 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BarterManager 实例
BarterManager barterManager = ...;
var result = barterManager.InitializeSafePassageBarterContext(barterable, args, obj);
```

## 使用示例

```csharp
var manager = BarterManager.Current;
```

## 参见

- [本区域目录](../)