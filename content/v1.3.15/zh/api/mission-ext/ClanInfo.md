---
title: "ClanInfo"
description: "ClanInfo 的自动生成类参考。"
---
# ClanInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanInfo`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanInfo.cs`

## 概述

`ClanInfo` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClanId` | `public Guid ClanId { get; }` |
| `Name` | `public string Name { get; }` |
| `Tag` | `public string Tag { get; }` |
| `Faction` | `public string Faction { get; }` |
| `Sigil` | `public string Sigil { get; }` |
| `InformationText` | `public string InformationText { get; }` |
| `Players` | `public ClanPlayer Players { get; }` |
| `Announcements` | `public ClanAnnouncement Announcements { get; }` |

## 主要方法

### CreateUnavailableClanInfo
`public static ClanInfo CreateUnavailableClanInfo()`

**用途 / Purpose:** 构建一个新的 unavailable clan info 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
ClanInfo.CreateUnavailableClanInfo();
```

## 使用示例

```csharp
ClanInfo.CreateUnavailableClanInfo();
```

## 参见

- [本区域目录](../)