---
title: "SceneTextureProvider"
description: "SceneTextureProvider：TaleWorlds.MountAndBlade.GauntletUI.TextureProviders 的 public 类，继承 TextureProvider；公开成员 7 个（方法 3、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SceneTextureProvider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class SceneTextureProvider : TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SceneTextureProvider 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs。它是一个 public 类，实现/继承 TextureProvider，继承链为 SceneTextureProvider → TextureProvider。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneTextureProvider 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders`，继承链 SceneTextureProvider → TextureProvider。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/SceneTextureProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WantedScene` | `public Scene WantedScene` | 属性 |
| `IsReady` | `public bool? IsReady` | 属性 |
| `Scene` | `public object Scene` | 属性 |
| `SceneTextureProvider` | `public SceneTextureProvider()` | 构造函数 |
| `Tick` | `public override void Tick(float dt)` | 方法 |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | 方法 |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 TextureProvider](../../gui/TextureProvider/)
- [同命名空间 BannerTableauTextureProvider](../BannerTableauTextureProvider/)
- [同命名空间 BrightnessDemoTextureProvider](../BrightnessDemoTextureProvider/)
- [同命名空间 CharacterTableauTextureProvider](../CharacterTableauTextureProvider/)
- [同命名空间 ItemTableauTextureProvider](../ItemTableauTextureProvider/)
