<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarterManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BarterManager

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs`

## 概述

`BarterManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `BarterManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static BarterManager Instance { get; set; }` |
| `LastBarterIsAccepted` | `public bool LastBarterIsAccepted { get; set; }` |

## 主要方法

### BeginPlayerBarter
`public void BeginPlayerBarter(BarterData args)`

**用途 / Purpose:** 处理 `begin player barter` 相关逻辑。

### StartBarterOffer
`public void StartBarterOffer(Hero offerer, Hero other, PartyBase offererParty, PartyBase otherParty, Hero beneficiaryOfOtherHero = null, BarterManager.BarterContextInitializer InitContext = null, int persuasionCostReduction = 0, bool isAIBarter = false, IEnumerable<Barterable> defaultBarterables = null)`

**用途 / Purpose:** 处理 `start barter offer` 相关逻辑。

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, Barterable barterable)`

**用途 / Purpose:** 执行 `ai barter` 操作或流程。

### ExecuteAiBarter
`public void ExecuteAiBarter(IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero, IEnumerable<Barterable> baseBarterables)`

**用途 / Purpose:** 执行 `ai barter` 操作或流程。

### ExecuteAIBarter
`public void ExecuteAIBarter(BarterData barterData, IFaction faction1, IFaction faction2, Hero faction1Hero, Hero faction2Hero)`

**用途 / Purpose:** 执行 `a i barter` 操作或流程。

### Close
`public void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### IsOfferAcceptable
`public bool IsOfferAcceptable(BarterData args, Hero hero, PartyBase party)`

**用途 / Purpose:** 处理 `is offer acceptable` 相关逻辑。

### GetOfferValueForFaction
`public float GetOfferValueForFaction(BarterData barterData, IFaction faction)`

**用途 / Purpose:** 获取 `offer value for faction` 的当前值。

### GetOfferValue
`public float GetOfferValue(Hero selfHero, PartyBase selfParty, PartyBase offererParty, IEnumerable<Barterable> offeredBarters)`

**用途 / Purpose:** 获取 `offer value` 的当前值。

### ApplyAndFinalizePlayerBarter
`public void ApplyAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**用途 / Purpose:** 将 `and finalize player barter` 应用到当前对象。

### CancelAndFinalizePlayerBarter
`public void CancelAndFinalizePlayerBarter(Hero offererHero, Hero otherHero, BarterData barterData)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel and finalize player barter`。

### CanPlayerBarterWithHero
`public bool CanPlayerBarterWithHero(Hero hero)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player barter with hero`。

### InitializeMarriageBarterContext
`public bool InitializeMarriageBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** 初始化 `marriage barter context` 的状态、资源或绑定。

### InitializeJoinFactionBarterContext
`public bool InitializeJoinFactionBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** 初始化 `join faction barter context` 的状态、资源或绑定。

### InitializeMakePeaceBarterContext
`public bool InitializeMakePeaceBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** 初始化 `make peace barter context` 的状态、资源或绑定。

### InitializeSafePassageBarterContext
`public bool InitializeSafePassageBarterContext(Barterable barterable, BarterData args, object obj)`

**用途 / Purpose:** 初始化 `safe passage barter context` 的状态、资源或绑定。

### BarterContextInitializer
`public delegate bool BarterContextInitializer(Barterable barterable, BarterData args, object obj = null)`

**用途 / Purpose:** 处理 `barter context initializer` 相关逻辑。

### BarterCloseEventDelegate
`public delegate void BarterCloseEventDelegate()`

**用途 / Purpose:** 处理 `barter close event delegate` 相关逻辑。

### BarterBeginEventDelegate
`public delegate void BarterBeginEventDelegate(BarterData args)`

**用途 / Purpose:** 处理 `barter begin event delegate` 相关逻辑。

## 使用示例

```csharp
var manager = BarterManager.Current;
```

## 参见

- [完整类目录](../catalog)