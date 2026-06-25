---
title: "SteamModuleExtension"
description: "SteamModuleExtension 的自动生成类参考。"
---
# SteamModuleExtension

**Namespace:** TaleWorlds.PlatformService.Steam
**Module:** TaleWorlds.PlatformService
**Type:** `public class SteamModuleExtension : IPlatformModuleExtension`
**Base:** `IPlatformModuleExtension`
**File:** `TaleWorlds.PlatformService.Steam/SteamModuleExtension.cs`

## 概述

`SteamModuleExtension` 位于 `TaleWorlds.PlatformService.Steam`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.Steam` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize(List<string> args)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SteamModuleExtension 实例
SteamModuleExtension steamModuleExtension = ...;
steamModuleExtension.Initialize(args);
```

### GetModulePaths
`public string GetModulePaths()`

**用途 / Purpose:** 读取并返回当前对象中 「module paths」 的结果。

```csharp
// 先通过子系统 API 拿到 SteamModuleExtension 实例
SteamModuleExtension steamModuleExtension = ...;
var result = steamModuleExtension.GetModulePaths();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SteamModuleExtension 实例
SteamModuleExtension steamModuleExtension = ...;
steamModuleExtension.Destroy();
```

### SetLauncherMode
`public void SetLauncherMode(bool isLauncherModeActive)`

**用途 / Purpose:** 为 「launcher mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SteamModuleExtension 实例
SteamModuleExtension steamModuleExtension = ...;
steamModuleExtension.SetLauncherMode(false);
```

### CheckEntitlement
`public bool CheckEntitlement(string title)`

**用途 / Purpose:** 检查「entitlement」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 SteamModuleExtension 实例
SteamModuleExtension steamModuleExtension = ...;
var result = steamModuleExtension.CheckEntitlement("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SteamModuleExtension steamModuleExtension = ...;
steamModuleExtension.Initialize(args);
```

## 参见

- [本区域目录](../)