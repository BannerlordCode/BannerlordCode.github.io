---
title: "GameServerProperties"
description: "GameServerProperties 的自动生成类参考。"
---
# GameServerProperties

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameServerProperties`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/GameServerProperties.cs`

## 概述

`GameServerProperties` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `Region` | `public string Region { get; set; }` |
| `GameModule` | `public string GameModule { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Map` | `public string Map { get; set; }` |
| `UniqueMapId` | `public string UniqueMapId { get; set; }` |
| `GamePassword` | `public string GamePassword { get; set; }` |
| `AdminPassword` | `public string AdminPassword { get; set; }` |
| `MaxPlayerCount` | `public int MaxPlayerCount { get; set; }` |
| `PasswordProtected` | `public bool PasswordProtected { get; set; }` |
| `IsOfficial` | `public bool IsOfficial { get; set; }` |
| `ByOfficialProvider` | `public bool ByOfficialProvider { get; set; }` |
| `CrossplayEnabled` | `public bool CrossplayEnabled { get; set; }` |
| `Permission` | `public int Permission { get; set; }` |
| `HostId` | `public PlayerId HostId { get; set; }` |
| `HostName` | `public string HostName { get; set; }` |
| `LoadedModules` | `public List<ModuleInfoModel> LoadedModules { get; set; }` |
| `AllowsOptionalModules` | `public bool AllowsOptionalModules { get; set; }` |

## 主要方法

### CheckAndReplaceProxyAddress
`public void CheckAndReplaceProxyAddress(IReadOnlyDictionary<string, string> proxyAddressMap)`

**用途 / Purpose:** **用途 / Purpose:** 检查and replace proxy address在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 GameServerProperties 实例
GameServerProperties gameServerProperties = ...;
gameServerProperties.CheckAndReplaceProxyAddress(iReadOnlyDictionary<string, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameServerProperties gameServerProperties = ...;
gameServerProperties.CheckAndReplaceProxyAddress(iReadOnlyDictionary<string, "example");
```

## 参见

- [本区域目录](../)