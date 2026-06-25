---
title: "BodyGenerator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BodyGenerator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BodyGenerator

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BodyGenerator`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BodyGenerator.cs`

## 概述

`BodyGenerator` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |

## 主要方法

### InitBodyGenerator
`public FaceGenerationParams InitBodyGenerator(bool isDressed)`

**用途 / Purpose:** 初始化 `body generator` 的状态、资源或绑定。

### RefreshFace
`public void RefreshFace(FaceGenerationParams faceGenerationParams, bool hasEquipment)`

**用途 / Purpose:** 刷新 `face` 的显示或缓存。

### SaveCurrentCharacter
`public void SaveCurrentCharacter()`

**用途 / Purpose:** 保存 `current character` 数据。

## 使用示例

```csharp
var value = new BodyGenerator();
value.InitBodyGenerator(false);
```

## 参见

- [完整类目录](../catalog)