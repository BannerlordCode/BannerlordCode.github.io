---
title: "MultiplayerStarter"
description: "MultiplayerStarter 的自动生成类参考。"
---
# MultiplayerStarter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerStarter`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerStarter.cs`

## 概述

`MultiplayerStarter` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadXMLFromFile
`public void LoadXMLFromFile(string xmlPath, string xsdPath)`

**用途 / Purpose:** 从持久化存储或流中读取 「x m l from file」。

```csharp
// 先通过子系统 API 拿到 MultiplayerStarter 实例
MultiplayerStarter multiplayerStarter = ...;
multiplayerStarter.LoadXMLFromFile("example", "example");
```

### ClearEmptyObjects
`public void ClearEmptyObjects()`

**用途 / Purpose:** 清空当前对象中的「empty objects」。

```csharp
// 先通过子系统 API 拿到 MultiplayerStarter 实例
MultiplayerStarter multiplayerStarter = ...;
multiplayerStarter.ClearEmptyObjects();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerStarter multiplayerStarter = ...;
multiplayerStarter.LoadXMLFromFile("example", "example");
```

## 参见

- [本区域目录](../)