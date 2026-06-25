---
title: "GauntletUISubModule"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletUISubModule`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletUISubModule

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs`

## 概述

`GauntletUISubModule` 位于 `TaleWorlds.MountAndBlade.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GauntletUISubModule Instance { get; }` |

## 主要方法

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `multiplayer game start` 事件触发时调用此方法。

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 当 `game end` 事件触发时调用此方法。

### ClearChatLog
`public static string ClearChatLog(List<string> strings)`

**用途 / Purpose:** 处理 `clear chat log` 相关逻辑。

### SetCanFocusWhileInMission
`public static string SetCanFocusWhileInMission(List<string> strings)`

**用途 / Purpose:** 设置 `can focus while in mission` 的值或状态。

## 使用示例

```csharp
var value = new GauntletUISubModule();
value.OnMultiplayerGameStart(game, starterObject);
```

## 参见

- [完整类目录](../catalog)