---
title: "EncyclopediaManager"
description: "EncyclopediaManager 的自动生成类参考。"
---
# EncyclopediaManager

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaManager.cs`

## 概述

`EncyclopediaManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EncyclopediaManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ViewDataTracker` | `public IViewDataTracker ViewDataTracker { get; }` |

## 主要方法

### CreateEncyclopediaPages
`public void CreateEncyclopediaPages()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 encyclopedia pages 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.CreateEncyclopediaPages();
```

### GetEncyclopediaPages
`public IEnumerable<EncyclopediaPage> GetEncyclopediaPages()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 encyclopedia pages 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
var result = encyclopediaManager.GetEncyclopediaPages();
```

### GetPageOf
`public EncyclopediaPage GetPageOf(Type type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 page of 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
var result = encyclopediaManager.GetPageOf(type);
```

### GetIdentifier
`public string GetIdentifier(Type type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 identifier 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
var result = encyclopediaManager.GetIdentifier(type);
```

### GoToLink
`public void GoToLink(string pageType, string stringID)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GoToLink 对应的操作。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.GoToLink("example", "example");
```

### GoToLink
`public void GoToLink(string link)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GoToLink 对应的操作。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.GoToLink("example");
```

### SetLinkCallback
`public void SetLinkCallback(Action<string, object> ExecuteLink)`

**用途 / Purpose:** **用途 / Purpose:** 为 link callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EncyclopediaManager 实例
EncyclopediaManager encyclopediaManager = ...;
encyclopediaManager.SetLinkCallback(action<string, executeLink);
```

## 使用示例

```csharp
var manager = EncyclopediaManager.Current;
```

## 参见

- [本区域目录](../)