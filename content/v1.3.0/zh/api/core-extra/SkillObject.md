---
title: "SkillObject"
description: "SkillObject 的自动生成类参考。"
---
# SkillObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SkillObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.Core/SkillObject.cs`

## 概述

`SkillObject` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Attributes` | `public CharacterAttribute Attributes { get; }` |
| `HowToLearnSkillText` | `public TextObject HowToLearnSkillText { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 SkillObject 实例
SkillObject skillObject = ...;
var result = skillObject.ToString();
```

### Initialize
`public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute attributes)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SkillObject 实例
SkillObject skillObject = ...;
var result = skillObject.Initialize(name, description, attributes);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SkillObject skillObject = ...;
skillObject.ToString();
```

## 参见

- [本区域目录](../)