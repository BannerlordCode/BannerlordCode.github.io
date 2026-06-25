---
title: "WaitMenuOption"
description: "WaitMenuOption 的自动生成类参考。"
---
# WaitMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WaitMenuOption`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/WaitMenuOption.cs`

## 概述

`WaitMenuOption` 位于 `TaleWorlds.CampaignSystem.GameMenus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Priority` | `public int Priority { get; }` |

## 主要方法

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 在 condition delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WaitMenuOption 实例
WaitMenuOption waitMenuOption = ...;
var result = waitMenuOption.OnConditionDelegate(args);
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 在 consequence delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WaitMenuOption 实例
WaitMenuOption waitMenuOption = ...;
waitMenuOption.OnConsequenceDelegate(args);
```

### GetConditionsHold
`public bool GetConditionsHold(Game game, MapState mapState)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 conditions hold 的结果。

```csharp
// 先通过子系统 API 拿到 WaitMenuOption 实例
WaitMenuOption waitMenuOption = ...;
var result = waitMenuOption.GetConditionsHold(game, mapState);
```

### RunConsequence
`public void RunConsequence(Game game, MapState mapState)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RunConsequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 WaitMenuOption 实例
WaitMenuOption waitMenuOption = ...;
waitMenuOption.RunConsequence(game, mapState);
```

### Deserialize
`public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 WaitMenuOption 实例
WaitMenuOption waitMenuOption = ...;
waitMenuOption.Deserialize(node, typeOfWaitMenusCallbacks);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WaitMenuOption waitMenuOption = ...;
waitMenuOption.OnConditionDelegate(args);
```

## 参见

- [本区域目录](../)