---
title: "MessageInfo"
description: "MessageInfo 的自动生成类参考。"
---
# MessageInfo

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class MessageInfo`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageInfo.cs`

## 概述

`MessageInfo` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SourceIPAddress` | `public string SourceIPAddress { get; set; }` |
| `SourceClientId` | `public Guid SourceClientId { get; set; }` |
| `SourceUserName` | `public string SourceUserName { get; set; }` |
| `SourcePlatform` | `public string SourcePlatform { get; set; }` |
| `SourcePlatformId` | `public string SourcePlatformId { get; set; }` |
| `DestinationPostBox` | `public string DestinationPostBox { get; set; }` |
| `DestinationClientId` | `public Guid DestinationClientId { get; set; }` |

## 主要方法

### WriteTo
`public void WriteTo(Stream stream, bool fromServer)`

**用途 / Purpose:** 将to写入目标位置。

```csharp
// 先通过子系统 API 拿到 MessageInfo 实例
MessageInfo messageInfo = ...;
messageInfo.WriteTo(stream, false);
```

### ReadFrom
`public static MessageInfo ReadFrom(Stream stream, bool fromServer)`

**用途 / Purpose:** 从当前实例读取from相关数据。

```csharp
// 静态调用，不需要实例
MessageInfo.ReadFrom(stream, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MessageInfo messageInfo = ...;
messageInfo.WriteTo(stream, false);
```

## 参见

- [本区域目录](../)