---
title: "SoundEventParameter"
description: "SoundEventParameter 的自动生成类参考。"
---
# SoundEventParameter

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SoundEventParameter`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/SoundEventParameter.cs`

## 概述

`SoundEventParameter` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SoundEventParameter
`public struct SoundEventParameter(string paramName, float value)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SoundEventParameter 实例
SoundEventParameter soundEventParameter = ...;
var result = soundEventParameter.SoundEventParameter("example", 0);
```

### Update
`public void Update(string paramName, float value)`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 SoundEventParameter 实例
SoundEventParameter soundEventParameter = ...;
soundEventParameter.Update("example", 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SoundEventParameter soundEventParameter = ...;
soundEventParameter.SoundEventParameter("example", 0);
```

## 参见

- [本区域目录](../)