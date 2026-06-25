---
title: "SpriteFromTexture"
description: "SpriteFromTexture 的自动生成类参考。"
---
# SpriteFromTexture

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class SpriteFromTexture : Sprite`
**Base:** `Sprite`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/SpriteFromTexture.cs`

## 概述

`SpriteFromTexture` 位于 `TaleWorlds.GauntletUI.BaseTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.BaseTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMinUvs
`public override Vec2 GetMinUvs()`

**用途 / Purpose:** 读取并返回当前对象中 min uvs 的结果。

```csharp
// 先通过子系统 API 拿到 SpriteFromTexture 实例
SpriteFromTexture spriteFromTexture = ...;
var result = spriteFromTexture.GetMinUvs();
```

### GetMaxUvs
`public override Vec2 GetMaxUvs()`

**用途 / Purpose:** 读取并返回当前对象中 max uvs 的结果。

```csharp
// 先通过子系统 API 拿到 SpriteFromTexture 实例
SpriteFromTexture spriteFromTexture = ...;
var result = spriteFromTexture.GetMaxUvs();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SpriteFromTexture spriteFromTexture = ...;
spriteFromTexture.GetMinUvs();
```

## 参见

- [本区域目录](../)