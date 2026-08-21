---
title: "MBDebug"
description: "MBDebug 是面向 mod 的调试与日志门面，几乎所有方法都经 EngineApplicationInterface.IDebug 转发到原生层，断言与调试绘制多数受条件编译保护。"
---
# MBDebug

**Namespace:** `TaleWorlds.Engine`  
**Module:** `TaleWorlds.Engine`  
**类型：** `public static class MBDebug`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.Engine/MBDebug.cs`

## 概述

`MBDebug` 是引擎给 mod 和最上层代码用的静态调试门面。它把日志、警告、错误、断言、消息框与屏幕调试绘制统一收口，几乎所有方法体都只有一行 `EngineApplicationInterface.IDebug.Method(...)`，把调用转发到原生调试实现。其中 `Print`/`ShowWarning`/`ShowError`/`ShowMessageBox` 在正式构建里依然有效；而大量 `Assert*`、`ConsolePrint`、`RenderDebug*` 方法被 `[Conditional("_RGL_KEEP_ASSERTS")]` 或 `[Conditional("DEBUG_MORE")]` 标记，在发布版编译时整段消失。理解哪些方法「永远生效」、哪些「只在调试构建存在」，是安全使用它的关键。

## 心智模型

`MBDebug` 是 mod 面对的调试门面，几乎所有输出都经 `EngineApplicationInterface.IDebug` 转发到原生层；它分两类：一类是始终生效的（如 `Print`、`ShowWarning`、`ShowError`、`ShowMessageBox`），另一类只在特定编译符号下存在（带 `[Conditional]` 的 `Assert`、`ConsolePrint`、`RenderDebug*`）。因此不要把断言当运行时校验——`Assert` 失败在发布版不会执行，真正的输入校验要写在业务代码里。调试绘制（`RenderDebugText`、`RenderDebugSphere` 等）也只在调试构建出现，不能在上面叠加任何游戏逻辑。它只是诊断工具，不是游戏系统；日志还受静态开关 `DisableLogging` 与 `DisableAllUI` 影响。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `Print(string, logLevel, color, debugFilter)` | 写日志行，受 `DisableLogging` 与 `debugFilter` 过滤；始终生效 |
| `ShowMessageBox(lpText, lpCaption, uType)` | 弹出模态消息框，`uType` 用 `MessageBoxTypeFlag` 组合；始终生效 |
| `ShowWarning` / `ShowError` | 输出警告/错误；若调试器已附加且原生返回真则中断 |
| `Assert(condition, message, ...)` | 条件为假时记录失败断言；`[Conditional]` 故发布版不编译 |
| `SilentAssert(condition, message, getDump)` | 不弹 UI 的断言，仍受条件编译控制 |
| `RenderDebugText` / `RenderDebugSphere` 等 | 屏幕/世界空间调试绘制，全部 `[Conditional]`，仅调试构建有效 |
| `DisableLogging` / `DisableAllUI` | 静态开关，分别关闭日志与界面渲染 |

## 真实示例

下面演示三种始终生效的调用：弹错、写日志、做不变式检查。注意 `Assert` 仅作开发期辅助，不应承担发布版必须执行的校验：

```csharp
MBDebug.ShowMessageBox("存档已损坏", "错误", (uint)MBDebug.MessageBoxTypeFlag.Error);
MBDebug.Print("开始加载模组配置", 0, Debug.DebugColor.White);
MBDebug.Assert(config != null, "配置对象未初始化");
```

`MessageBoxTypeFlag` 是 `MBDebug` 内的 `[Flags]` 枚举，`Ok`/`Warning`/`Error`/`YesNo` 等可按位组合成 `uType`。

## 风险与崩溃边界

- **断言在发布版不存在。** `Assert`/`SilentAssert` 被 `[Conditional("_RGL_KEEP_ASSERTS")]` 标记，正式构建里整段移除；绝不能用它做运行时保护。
- **`ShowMessageBox` 会阻塞。** 它是模态框，游戏会停住等待用户；不要在 tick 或加载热路径里频繁调用。
- **调试绘制不可依赖。** `RenderDebug*` 在发布版被剔除，任何叠加在其上的逻辑都会一起消失。
- **`Print` 受过滤开关影响。** `DisableLogging` 为真或 `debugFilter` 被清零时，`Print` 静默返回，不写任何内容。

## 跨版本提示

1.3.15 与 1.4.5 的 `MBDebug` 公开方法数量与签名完全一致（均约 40 个），`MessageBoxTypeFlag` 枚举、各 `[Conditional]` 标注与转发目标 `IDebug` 均未变。跨版本 mod 可稳定依赖 `Print`、`ShowMessageBox`、`Assert` 等入口。

## 依赖关系

- 上游（转发目标）：[EngineApplicationInterface](../EngineApplicationInterface/) 提供 `IDebug` 原生实现，是 `MBDebug` 所有方法的落点。
- 下游（典型调用方）：几乎所有子系统的诊断代码，以及 [SoundManager](../SoundManager/) 等门面。
- 相关阅读：[崩溃边界](../../../architecture/crash-boundaries/) 解释断言失败与错误报告的后果；[native-interop 架构说明](../../../architecture/native-interop/) 解释 `IDebug` 桥接。
- 同层门面：[SoundManager](../SoundManager/) 也经 `EngineApplicationInterface` 转发。

- 父级：[engine API](../)
- 同级：[EngineApplicationInterface](../EngineApplicationInterface/) · [SoundManager](../SoundManager/)
