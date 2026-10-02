---
title: "BannerVisual"
description: "BannerVisual：TaleWorlds.MountAndBlade.View 的 public 类，继承 IBannerVisual；公开成员 8 个（方法 6、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerVisual

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BannerVisual : IBannerVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BannerVisual 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs。它是一个 public 类，实现/继承 IBannerVisual，继承链为 BannerVisual → IBannerVisual。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerVisual 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View`，继承链 BannerVisual → IBannerVisual。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Banner` | `public Banner Banner` | 属性 |
| `BannerVisual` | `public BannerVisual(Banner banner)` | 构造函数 |
| `ValidateCreateTableauTextures` | `public void ValidateCreateTableauTextures()` | 方法 |
| `GetTableauTextureSmall` | `public Texture GetTableauTextureSmall(in BannerDebugInfo debugInfo, Action<Texture>setAction, bool isTableauOrNineGrid = true)` | 方法 |
| `GetTableauTextureLarge` | `public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture>setAction, bool isTableauOrNineGrid = true)` | 方法 |
| `GetTableauTextureLarge` | `public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture>setAction, out BannerTextureCreationData creationData, bool isTableauOrNineGrid = true)` | 方法 |
| `GetMeshMatrix` | `public static MatrixFrame GetMeshMatrix(ref Mesh mesh, float marginLeft, float marginTop, float width, float height, bool mirrored, float rotation, float deltaZ)` | 方法 |
| `ConvertToMultiMesh` | `public MetaMesh ConvertToMultiMesh()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IBannerVisual](../../core-extra/IBannerVisual/)
- [同命名空间 AgentVisuals](../AgentVisuals/)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator/)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator/)
- [同命名空间 BannerVisualExtensions](../BannerVisualExtensions/)
