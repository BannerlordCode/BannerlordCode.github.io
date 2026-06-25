---
title: "ProfileSelectionState"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ProfileSelectionState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ProfileSelectionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.MountAndBlade/ProfileSelectionState.cs`

## 概述

`ProfileSelectionState` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible { get; }` |

## 主要方法

### OnProfileSelected
`public void OnProfileSelected()`

**用途 / Purpose:** 当 `profile selected` 事件触发时调用此方法。

### StartGame
`public void StartGame()`

**用途 / Purpose:** 处理 `start game` 相关逻辑。

### OnProfileSelectionEvent
`public delegate void OnProfileSelectionEvent()`

**用途 / Purpose:** 当 `profile selection event` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new ProfileSelectionState();
value.OnProfileSelected();
```

## 参见

- [完整类目录](../catalog)