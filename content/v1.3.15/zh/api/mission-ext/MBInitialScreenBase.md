---
title: MBInitialScreenBase
description: MBInitialScreenBase - 游戏初始启动屏幕的基?
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBInitialScreenBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBInitialScreenBase
**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** class（继承自 

`ScreenBase

`，实?

`IGameStateListener

`?
## 概述
`MBInitialScreenBase

` 是游戏启动时显示的初始屏幕（主菜单）的基类。它负责播放启动视频、处理模块加载、检测编辑模式入口快捷键（Ctrl+E）。屏幕从所有激活的模块中查?

`Videos/initial_menu

` 目录下的启动视频，随机选择一个播放，并根据屏幕分辨率调整视频宽高比?
## 心智模型
屏幕?

`OnInitialize

` 时创建相机、清理内存、销毁旧游戏实例、初始化音乐管理器。`OnActivate

` 时刷新场景并允许模块加载。`RefreshScene

` 遍历所有激活模块的视频目录，查?

`*_pc.ivf

`（视频）?

`*.ogg

`（音频）配对文件，随机选择播放。`OnFrameTick

` 中检?Ctrl+E 进入编辑模式，并处理屏幕分辨率变化时的视频宽高比调整。视频使?16:9 比例，对?16:9 屏幕通过 

`SetOffset

` ?

`SetScale

` 裁剪适配?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`_state

` \| 

`InitialState

` (protected) \| 关联的初始状态对?\|
\| 

`_videoPlayerView

` \| 

`VideoPlayerView

` (protected) \| 视频播放器视?\|

## 主要方法
### OnInitialize
`

`

`csharp
protected override void OnInitialize()
`

`

`
初始化屏幕：创建相机、清?GC、销毁旧游戏实例、初始化音乐管理器。订?

`InitialState.OnInitialMenuOptionInvoked

` 事件?
### OnActivate
`

`

`csharp
protected override void OnActivate()
`

`

`
屏幕激活时刷新场景，允许模块加载。若启用本地化检查，执行 

`LocalizedTextManager.CheckValidity

`?
### OnFrameTick
`

`

`csharp
protected sealed override void OnFrameTick(float dt)
`

`

`
每帧更新。禁用全局加载窗口，检?Ctrl+E 编辑模式快捷键，调用 

`OnInitialScreenTick

`，检测分辨率变化并调整视频宽高比?
### RefreshScene
`

`

`csharp
private void RefreshScene()
`

`

`
刷新场景并播放启动视频。遍历所有激活模块的 

`Videos/initial_menu

` 目录，查?

`*_pc.ivf

` ?

`*.ogg

` 配对文件，随机选择一个以 24fps 播放?
### RefreshVideoAspect
`

`

`csharp
private void RefreshVideoAspect(Vec2 screenRes)
`

`

`
根据屏幕分辨率调整视频宽高比。对宽于 16:9 的屏幕水平裁剪，对窄?16:9 的屏幕垂直裁剪?
### DoExitButtonAction
`

`

`csharp
public static void DoExitButtonAction()
`

`

`
触发退出按钮动作，调用 

`MBAPI.IMBScreen.OnExitButtonClick

`?
### OnEditModeEnterPress / OnEditModeEnterRelease
`

`

`csharp
public static void OnEditModeEnterPress()
public static void OnEditModeEnterRelease()
`

`

`
编辑模式入口的按?释放事件，调?Native API?
## 使用示例
### 示例: 继承创建自定义初始屏?**场景**: mod 需要自定义启动屏幕行为?

`

`

`csharp
public class MyCustomInitialScreen : MBInitialScreenBase
{
    public MyCustomInitialScreen(InitialState state) : base(state) { }
    
    protected override void OnInitialScreenTick(float dt)
    {
        base.OnInitialScreenTick(dt);
        // 添加自定义每帧逻辑
        if (Input.IsKeyReleased(InputKey.F8))
        {
            // 自定义快捷键处理
            Debug.Print("自定义快捷键 F8 被按?);
        }
    }
}
`

`

`
**要点**: 

`OnFrameTick

` ?sealed 的，子类只能重写 

`OnInitialScreenTick

`；视频文件必须成对存在（

`.ivf

` + 

`.ogg

`），否则不会播放；屏幕停用时会自动停止视频播放?
## 参见
- [完整类目录](../catalog-engine)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
