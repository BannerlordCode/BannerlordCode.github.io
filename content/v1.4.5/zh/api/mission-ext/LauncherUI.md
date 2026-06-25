---
title: "LauncherUI"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LauncherUI`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherUI

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherUI`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherUI.cs`

## 概述

`LauncherUI` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### CheckMouseOverWindowDragArea
`public bool CheckMouseOverWindowDragArea()`

**用途 / Purpose:** 处理 `check mouse over window drag area` 相关逻辑。

### HitTest
`public bool HitTest()`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### AddHintInformation
`public static void AddHintInformation(string message)`

**用途 / Purpose:** 向当前集合/状态中添加 `hint information`。

### HideHintInformation
`public static void HideHintInformation()`

**用途 / Purpose:** 处理 `hide hint information` 相关逻辑。

## 使用示例

```csharp
var value = new LauncherUI();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)