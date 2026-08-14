---
title: "Program"
description: "Program 的自动生成类参考。"
---
# Program

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class Program`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/Program.cs`

## 概述

`Program` 位于 `TaleWorlds.MountAndBlade.SteamWorkshop`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.SteamWorkshop` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerlordSteamAppIdAsString` | `public static string BannerlordSteamAppIdAsString { get; set; }` |
| `ItemId` | `public static PublishedFileId_t ItemId { get; set; }` |

## 主要方法

### ExitProgram
`public static void ExitProgram(int exitCode)`

**用途 / Purpose:** 调用 ExitProgram 对应的操作。

```csharp
// 静态调用，不需要实例
Program.ExitProgram(0);
```

### Log
`public static void Log(string log)`

**用途 / Purpose:** 调用 Log 对应的操作。

```csharp
// 静态调用，不需要实例
Program.Log("example");
```

## 使用示例

```csharp
Program.ExitProgram(0);
```

## 参见

- [本区域目录](../)