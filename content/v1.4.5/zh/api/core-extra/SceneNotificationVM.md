---
title: "SceneNotificationVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneNotificationVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SceneNotificationVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/SceneNotificationVM.cs`

## 概述

`SceneNotificationVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveData` | `public SceneNotificationData ActiveData { get; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsReady` | `public bool IsReady { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `Scene` | `public object Scene { get; set; }` |
| `EndProgress` | `public float EndProgress { get; set; }` |
| `AffirmativeHint` | `public BasicTooltipViewModel AffirmativeHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### CreateNotification
`public void CreateNotification(SceneNotificationData data)`

**用途 / Purpose:** 创建一个 `notification` 实例或对象。

### ClearData
`public void ClearData()`

**用途 / Purpose:** 处理 `clear data` 相关逻辑。

### ExecuteAffirmativeProcess
`public void ExecuteAffirmativeProcess()`

**用途 / Purpose:** 执行 `affirmative process` 操作或流程。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### ExecuteNegativeProcess
`public void ExecuteNegativeProcess()`

**用途 / Purpose:** 执行 `negative process` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new SceneNotificationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)