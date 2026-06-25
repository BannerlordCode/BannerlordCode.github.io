---
title: "MissionInitializerRecord"
description: "MissionInitializerRecord 的自动生成类参考。"
---
# MissionInitializerRecord

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct MissionInitializerRecord`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionInitializerRecord.cs`

## 概述

`MissionInitializerRecord` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MissionInitializerRecord
`public struct MissionInitializerRecord(string name)`

**用途 / Purpose:** 调用 MissionInitializerRecord 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionInitializerRecord 实例
MissionInitializerRecord missionInitializerRecord = ...;
var result = missionInitializerRecord.MissionInitializerRecord("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionInitializerRecord missionInitializerRecord = ...;
missionInitializerRecord.MissionInitializerRecord("example");
```

## 参见

- [本区域目录](../)