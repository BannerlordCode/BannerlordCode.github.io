---
title: "VoiceObject"
description: "VoiceObject 的自动生成类参考。"
---
# VoiceObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class VoiceObject`
**Base:** 无
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/VoiceObject.cs`

## 概述

`VoiceObject` 位于 `TaleWorlds.Localization`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Localization` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddVoicePaths
`public void AddVoicePaths(XmlNode node, string modulePath)`

**用途 / Purpose:** **用途 / Purpose:** 将 voice paths 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VoiceObject 实例
VoiceObject voiceObject = ...;
voiceObject.AddVoicePaths(node, "example");
```

### Deserialize
`public static VoiceObject Deserialize(XmlNode node, string modulePath)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 静态调用，不需要实例
VoiceObject.Deserialize(node, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VoiceObject voiceObject = ...;
voiceObject.AddVoicePaths(node, "example");
```

## 参见

- [本区域目录](../)