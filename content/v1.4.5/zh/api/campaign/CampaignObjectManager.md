---
title: "CampaignObjectManager"
description: "CampaignObjectManager 的自动生成类参考。"
---
# CampaignObjectManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignObjectManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## 概述

`CampaignObjectManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignObjectManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxCreatedPostfixIndex` | `public uint MaxCreatedPostfixIndex { get; }` |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |

## 主要方法

### PreAfterLoad
`public void PreAfterLoad()`

**用途 / Purpose:** 处理与 「pre after load」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.PreAfterLoad();
```

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 在 「load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.AfterLoad();
```

### GetMaxObjectSubId
`public uint GetMaxObjectSubId()`

**用途 / Purpose:** 读取并返回当前对象中 「max object sub id」 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.GetMaxObjectSubId();
```

### OnItemAdded
`public void OnItemAdded(T item)`

**用途 / Purpose:** 在 「item added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.OnItemAdded(item);
```

### UnregisterItem
`public void UnregisterItem(T item)`

**用途 / Purpose:** 从当前系统中注销「item」。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
campaignObjectManager.UnregisterItem(item);
```

### Find
`public T Find(string id)`

**用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.Find("example");
```

### FindFirst
`public T FindFirst(Predicate<T> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「first」。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.FindFirst(predicate);
```

### FindAll
`public MBReadOnlyList<T> FindAll(Predicate<T> predicate)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「all」。

```csharp
// 先通过子系统 API 拿到 CampaignObjectManager 实例
CampaignObjectManager campaignObjectManager = ...;
var result = campaignObjectManager.FindAll(predicate);
```

### FindNextUniqueStringId
`public static string FindNextUniqueStringId(List<CampaignObjectType<T>> lists, string id)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「next unique string id」。

```csharp
// 静态调用，不需要实例
CampaignObjectManager.FindNextUniqueStringId(lists, "example");
```

## 使用示例

```csharp
var manager = CampaignObjectManager.Current;
```

## 参见

- [本区域目录](../)