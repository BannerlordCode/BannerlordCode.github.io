---
title: "RegisterCustomGameMessage"
description: "RegisterCustomGameMessage 的自动生成类参考。"
---
# RegisterCustomGameMessage

**Namespace:** Messages.FromCustomBattleServer.ToCustomBattleServerManager
**Module:** Messages.FromCustomBattleServer
**Type:** `public class RegisterCustomGameMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromCustomBattleServer/ToCustomBattleServerManager/RegisterCustomGameMessage.cs`

## 概述

`RegisterCustomGameMessage` 位于 `Messages.FromCustomBattleServer.ToCustomBattleServerManager`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Messages.FromCustomBattleServer.ToCustomBattleServerManager` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameDefinitionId` | `public int GameDefinitionId { get; }` |
| `GameModule` | `public string GameModule { get; }` |
| `GameType` | `public string GameType { get; }` |
| `ServerName` | `public string ServerName { get; }` |
| `ServerAddress` | `public string ServerAddress { get; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; }` |
| `Map` | `public string Map { get; }` |
| `UniqueMapId` | `public string UniqueMapId { get; }` |
| `GamePassword` | `public string GamePassword { get; }` |
| `AdminPassword` | `public string AdminPassword { get; }` |
| `Port` | `public int Port { get; }` |
| `Region` | `public string Region { get; }` |
| `Permission` | `public int Permission { get; }` |
| `IsOverridingIP` | `public bool IsOverridingIP { get; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
RegisterCustomGameMessage instance = ...;
```

## 参见

- [本区域目录](../)