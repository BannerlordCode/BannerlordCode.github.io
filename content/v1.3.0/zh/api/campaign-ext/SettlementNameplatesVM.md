---
title: "SettlementNameplatesVM"
description: "SettlementNameplatesVM 的自动生成类参考。"
---
# SettlementNameplatesVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatesVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs`

## 概述

`SettlementNameplatesVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Nameplates` | `public MBBindingList<SettlementNameplateVM> Nameplates { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplatesVM 实例
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshValues();
```

### Initialize
`public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>> settlements)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SettlementNameplatesVM 实例
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.Initialize(iEnumerable<Tuple<Settlement, settlements);
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 SettlementNameplatesVM 实例
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.Update();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplatesVM 实例
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.OnFinalize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementNameplatesVM settlementNameplatesVM = ...;
settlementNameplatesVM.RefreshValues();
```

## 参见

- [本区域目录](../)