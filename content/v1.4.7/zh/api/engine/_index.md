---
title: "Engine — 引擎边界：调试、二维渲染上下文与 Diamond"
description: "TaleWorlds.Engine 及其子命名空间、加上 TaleWorlds.Diamond 的访问提供方所在目录。引擎层有几百个类型，目前只有 2 页。"
---
# Engine — 引擎边界：调试、二维渲染上下文与 Diamond

这个桶装 `TaleWorlds.Engine` 及其子命名空间，再加上 `TaleWorlds.Diamond` 的访问提供方。名字里的 "engine" 是**边界**的意思而不是"引擎源码"的意思 —— 里面全是托管侧的包装层，真正的原生代码在 `Bannerlord.Native.dll` 里，不属于本站范围。

有两件事值得先记住，因为它们会让你在别处遇到引用时回头找：

- **`GauntletLayer` 在这个桶**，不在 [gui](../gui/)。它的命名空间是 `TaleWorlds.Engine.GauntletUI`，而 `TaleWorlds.GauntletUI`（手柄导航上下文）在 gui 那边。两个名字相似的命名空间故意落在不同目录，这个规则解释见 [SDK 总览](../../architecture/sdk-overview)。
- **`MBDebug` 也在这个桶**，不在 [core-extra](../core-extra/)。它是模组作者第一时间就会用到的类型，所以入口类规则把它留在了引擎层。

## 本区页面（2）

| 页面 | 讲的是什么 |
| --- | --- |
| [GauntletLayer](./GauntletLayer) | 界面栈的最后一层：加载 XML 并把 ViewModel 绑上去 |
| [MBDebug](./MBDebug) | 控制台、热键与调试输出，模组调试的主力入口 |

这 2 页是这个桶里最常被用到的两个入口，而 `GauntletLayer` 又正好是把 [gui](../gui/) 那三层串起来的最后一环 —— 做完一个界面，最后一步走的就是它。

## 尚未收录

这个桶是 `TaleWorlds.Engine` 加 `TaleWorlds.Diamond` 的全部内容，规模在几百个类型量级，缺的是绝大多数。缺的部分可以按用途分四组：

- **原生桥接**：`MeshBuilder`、`SceneLayer`、`EngineTexture`、`EngineInputManager` —— 托管代码调到原生的那一层。
- **Diamond 客户端**：`AccessObject` 一族、`Client` / `ClientSocketSession` / `ClientRestSession`、`ConnectMessage` / `DisconnectMessage` / `SocketMessage`、`SessionProviderType`。模组作者从中得到的主要是 `MBDebug` 和崩溃收集相关的入口。
- **调试与热键**：`CheatsHotKeyCategory`、`DebugHotKeyCategory`、`PerformanceAnalyzer`、`CrashInformationCollector`。
- **二维渲染上下文**：`TwoDimensionEnginePlatform`、`TwoDimensionEngineResourceContext` —— [gui](../gui/) 里字体和纹理那一族真正的落地在这里。

也就是说：这两个页面覆盖了"调试"和"界面最后一层"，覆盖不到"渲染"和"平台通信"。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [custombattle](../custombattle/) · [sandbox](../sandbox/) · [system](../system/) · [modulemanager](../modulemanager/) · [network](../network/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [SDK 总览](../../architecture/sdk-overview)
- ↘ [界面栈](../../architecture/ui-stack)