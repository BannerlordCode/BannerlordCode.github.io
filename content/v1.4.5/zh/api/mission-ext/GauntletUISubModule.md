---
title: "GauntletUISubModule"
description: "GauntletUISubModule 的自动生成类参考。"
---
# GauntletUISubModule

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs`

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

**用途 / Purpose:** 在 multiplayer game start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletUISubModule 实例
GauntletUISubModule gauntletUISubModule = ...;
gauntletUISubModule.OnMultiplayerGameStart(game, starterObject);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**用途 / Purpose:** 在 game end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletUISubModule 实例
GauntletUISubModule gauntletUISubModule = ...;
gauntletUISubModule.OnGameEnd(game);
```

### ClearChatLog
`public static string ClearChatLog(List<string> strings)`

**用途 / Purpose:** 清空当前对象中的chat log。

```csharp
// 静态调用，不需要实例
GauntletUISubModule.ClearChatLog(strings);
```

### SetCanFocusWhileInMission
`public static string SetCanFocusWhileInMission(List<string> strings)`

**用途 / Purpose:** 为 can focus while in mission 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GauntletUISubModule.SetCanFocusWhileInMission(strings);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletUISubModule gauntletUISubModule = ...;
gauntletUISubModule.OnMultiplayerGameStart(game, starterObject);
```

## 参见

- [本区域目录](../)