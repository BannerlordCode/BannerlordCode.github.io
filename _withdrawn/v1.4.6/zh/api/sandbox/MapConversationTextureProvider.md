---
title: "MapConversationTextureProvider"
description: "MapConversationTextureProvider：SandBox.GauntletUI 的 public 类，继承 TextureProvider；公开成员 7 个（方法 4、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/MapConversationTextureProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationTextureProvider

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MapConversationTextureProvider : TextureProvider`
**File:** `SandBox.GauntletUI/MapConversationTextureProvider.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapConversationTextureProvider 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/MapConversationTextureProvider.cs。它是一个 public 类，实现/继承 TextureProvider，继承链为 MapConversationTextureProvider → TextureProvider。public/protected 成员共 7 个：4 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapConversationTextureProvider 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI`，继承链 MapConversationTextureProvider → TextureProvider。成员构成以方法为主（方法 4/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/MapConversationTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public object Data` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `MapConversationTextureProvider` | `public MapConversationTextureProvider()` | 构造函数 |
| `Clear` | `public override void Clear(bool clearNextFrame)` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | 方法 |
| `Tick` | `public override void Tick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureProvider](../../gui/TextureProvider/)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen/)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen/)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen/)
