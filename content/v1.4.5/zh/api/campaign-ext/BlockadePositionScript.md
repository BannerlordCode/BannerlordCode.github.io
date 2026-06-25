---
title: "BlockadePositionScript"
description: "BlockadePositionScript 的自动生成类参考。"
---
# BlockadePositionScript

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class BlockadePositionScript : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/BlockadePositionScript.cs`

## 概述

`BlockadePositionScript` 位于 `SandBox.View.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetBlockadeArc
`public List<List<Vec3>> GetBlockadeArc(int totalNumberOfShips, out Vec3 center)`

**用途 / Purpose:** 读取并返回当前对象中 blockade arc 的结果。

```csharp
// 先通过子系统 API 拿到 BlockadePositionScript 实例
BlockadePositionScript blockadePositionScript = ...;
var result = blockadePositionScript.GetBlockadeArc(0, center);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BlockadePositionScript blockadePositionScript = ...;
blockadePositionScript.GetBlockadeArc(0, center);
```

## 参见

- [本区域目录](../)