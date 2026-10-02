---
title: "TwoDimensionContext"
description: "TwoDimensionContext：TaleWorlds.TwoDimension 的 public 类；公开成员 23 个（方法 16、属性 6、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/TwoDimensionContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TwoDimensionContext

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TwoDimensionContext`
**File:** `TaleWorlds.TwoDimension/TwoDimensionContext.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

TwoDimensionContext 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/TwoDimensionContext.cs。它是一个 public 类，继承链为 TwoDimensionContext。public/protected 成员共 23 个：16 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TwoDimensionContext 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 TwoDimensionContext。成员构成以方法为主（方法 16/23，属性 6/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/TwoDimensionContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `public float Width` | 属性 |
| `Height` | `public float Height` | 属性 |
| `Platform` | `public ITwoDimensionPlatform Platform` | 属性 |
| `ResourceContext` | `public ITwoDimensionResourceContext ResourceContext` | 属性 |
| `ResourceDepot` | `public ResourceDepot ResourceDepot` | 属性 |
| `IsDebugModeEnabled` | `public bool IsDebugModeEnabled` | 属性 |
| `TwoDimensionContext` | `public TwoDimensionContext(ITwoDimensionPlatform platform, ITwoDimensionResourceContext resourceContext, ResourceDepot resourceDepot)` | 构造函数 |
| `PlaySound` | `public void PlaySound(string soundName)` | 方法 |
| `CreateSoundEvent` | `public void CreateSoundEvent(string soundName)` | 方法 |
| `StopAndRemoveSoundEvent` | `public void StopAndRemoveSoundEvent(string soundName)` | 方法 |
| `PlaySoundEvent` | `public void PlaySoundEvent(string soundName)` | 方法 |
| `DrawImage` | `public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)` | 方法 |
| `DrawText` | `public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)` | 方法 |
| `BeginDebugPanel` | `public void BeginDebugPanel(string panelTitle)` | 方法 |
| `EndDebugPanel` | `public void EndDebugPanel()` | 方法 |
| `DrawDebugText` | `public void DrawDebugText(string text)` | 方法 |
| `DrawDebugTreeNode` | `public bool DrawDebugTreeNode(string text)` | 方法 |
| `PopDebugTreeNode` | `public void PopDebugTreeNode()` | 方法 |
| `DrawCheckbox` | `public void DrawCheckbox(string label, ref bool isChecked)` | 方法 |
| `IsDebugItemHovered` | `public bool IsDebugItemHovered()` | 方法 |
| `LoadTexture` | `public Texture LoadTexture(string name)` | 方法 |
| `SetScissor` | `public void SetScissor(ScissorTestInfo scissor)` | 方法 |
| `ResetScissor` | `public void ResetScissor()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)
