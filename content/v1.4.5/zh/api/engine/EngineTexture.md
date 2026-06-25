---
title: "EngineTexture"
description: "EngineTexture 的自动生成类参考。"
---
# EngineTexture

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class EngineTexture : ITexture`
**Base:** `ITexture`
**File:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/EngineTexture.cs`

## 概述

`EngineTexture` 位于 `TaleWorlds.Engine.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 EngineTexture 实例
EngineTexture engineTexture = ...;
var result = engineTexture.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EngineTexture engineTexture = ...;
engineTexture.GetHashCode();
```

## 参见

- [本区域目录](../)