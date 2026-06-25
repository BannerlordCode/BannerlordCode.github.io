---
title: "SettlementNameplatesVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementNameplatesVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplatesVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatesVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplatesVM.cs`

## 概述

`SettlementNameplatesVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SmallNameplates` | `public MBBindingList<SettlementNameplateVM> SmallNameplates { get; set; }` |
| `MediumNameplates` | `public MBBindingList<SettlementNameplateVM> MediumNameplates { get; set; }` |
| `LargeNameplates` | `public MBBindingList<SettlementNameplateVM> LargeNameplates { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Initialize
`public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>> settlements)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### GetNameplateOfSettlement
`public SettlementNameplateVM GetNameplateOfSettlement(Settlement settlement)`

**用途 / Purpose:** 获取 `nameplate of settlement` 的当前值。

### OnRebelliousClanDisbandedAtSettlement
`public void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**用途 / Purpose:** 当 `rebellious clan disbanded at settlement` 事件触发时调用此方法。

### RefreshRelationsOfNameplates
`public void RefreshRelationsOfNameplates()`

**用途 / Purpose:** 刷新 `relations of nameplates` 的显示或缓存。

### RefreshDynamicPropertiesOfNameplates
`public void RefreshDynamicPropertiesOfNameplates(bool forceUpdate)`

**用途 / Purpose:** 刷新 `dynamic properties of nameplates` 的显示或缓存。

## 使用示例

```csharp
var value = new SettlementNameplatesVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)