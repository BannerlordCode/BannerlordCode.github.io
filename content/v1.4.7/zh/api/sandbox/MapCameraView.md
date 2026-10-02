---
title: "MapCameraView"
description: "SandBox.View.Map.MapCameraView —— 命名空间 SandBox.View.Map 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# MapCameraView

**Namespace:** `SandBox.View.Map`  
**Module:** `SandBox.View`  
**Type:** `public class MapCameraView : MapView`  
**Base:** `MapView`  
**Source:** `SandBox.View/Map/MapCameraView.cs`

## 概述

`MapCameraView` 是 bannerlord-1.4.7 源码中命名空间 `SandBox.View.Map` 下的类，声明于模块目录 `SandBox.View` 的 `SandBox.View/Map/MapCameraView.cs`（第 18 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MapView`；解析到的成员共 179 项，其中 37 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public bool IsMainPartyValid;` — 字段，类型 bool
- `public bool IsMapReady;` — 字段，类型 bool
- `public bool IsControlDown;` — 字段，类型 bool
- `public bool IsMouseActive;` — 字段，类型 bool
- `public bool CheatModeEnabled;` — 字段，类型 bool
- `public bool LeftMouseButtonPressed;` — 字段，类型 bool
- `public bool LeftMouseButtonDown;` — 字段，类型 bool
- `public bool LeftMouseButtonReleased;` — 字段，类型 bool
- `public bool MiddleMouseButtonDown;` — 字段，类型 bool
- `public bool RightMouseButtonDown;` — 字段，类型 bool
- `public bool RotateLeftKeyDown;` — 字段，类型 bool
- `public bool RotateRightKeyDown;` — 字段，类型 bool
- `public bool PartyMoveUpKey;` — 字段，类型 bool
- `public bool PartyMoveDownKey;` — 字段，类型 bool
- `public bool PartyMoveLeftKey;` — 字段，类型 bool
- `public bool PartyMoveRightKey;` — 字段，类型 bool
- `public bool CameraFollowModeKeyPressed;` — 字段，类型 bool
- `public bool LeftButtonDraggingMode;` — 字段，类型 bool
- `public bool IsInMenu;` — 字段，类型 bool
- `public bool RayCastForClosestEntityOrTerrainCondition;` — 字段，类型 bool
- `public float MapZoomIn;` — 字段，类型 float
- `public float MapZoomOut;` — 字段，类型 float
- `public float DeltaMouseScroll;` — 字段，类型 float
- `public float MouseSensitivity;` — 字段，类型 float
- `public float MouseMoveX;` — 字段，类型 float
- `public float MouseMoveY;` — 字段，类型 float
- `public float HorizontalCameraInput;` — 字段，类型 float
- `public float RX;` — 字段，类型 float
- `public float RY;` — 字段，类型 float
- `public float RS;` — 字段，类型 float

- 其余 7 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 37 条成员记录全部来自 `SandBox.View/Map/MapCameraView.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class MapCameraView : MapView` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`sandbox` API](../)
- [Add1000GoldCheat（同命名空间）](../Add1000GoldCheat)
- [Add100InfluenceCheat（同命名空间）](../Add100InfluenceCheat)
- [Add100RenownCheat（同命名空间）](../Add100RenownCheat)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
