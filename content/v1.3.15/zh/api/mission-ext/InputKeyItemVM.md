---
title: InputKeyItemVM
description: InputKeyItemVM - 输入按键显示项的视图模型
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputKeyItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputKeyItemVM
**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Input
**模块:** TaleWorlds.CampaignSystem.ViewModelCollection
**类型:** class（继承自 

`ViewModel

`?
## 概述
`InputKeyItemVM

` 是用于在 UI 中显示单个按键提示（??[F] 交互"）的视图模型。它封装?

`GameKey

` ?

`HotKey

`，根据当前输入设备（键盘/手柄）自动切换显示对应的按键标识和名称。支持强制名称覆盖和可见性控制，常用于游戏菜单、地图界面等需要显示快捷键提示的位置?
## 心智模型
VM 通过静态工厂方法创建，接收 

`GameKey

` ?

`HotKey

` 及是否仅手柄可见的标志。`ForceRefresh

` 是核心更新方法，根据 

`Input.IsGamepadActive

` 选择对应的按键标识（键盘键或手柄键），并通过 

`Game.Current.GameTextManager

` 查找按键的本地化名称。当手柄激活状态变化时，通过事件订阅自动刷新。`SetForcedVisibility

` 可强制覆盖可见性逻辑?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`GameKey

` \| 

`GameKey

` \| 关联的游戏按键（只读?\|
\| 

`HotKey

` \| 

`HotKey

` \| 关联的热键（只读?\|
\| 

`KeyID

` \| 

`string

` \| 按键标识（如 "F"?ControllerRDown"）（数据绑定?\|
\| 

`KeyName

` \| 

`string

` \| 按键本地化名称（数据绑定?\|
\| 

`IsVisible

` \| 

`bool

` \| 是否可见（数据绑定） \|

## 主要方法
### CreateFromGameKey
`

`

`csharp
public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)
`

`

`
?

`GameKey

` 创建 VM 实例。`isConsoleOnly

` ?true 时仅在手柄激活时可见?
### CreateFromHotKey
`

`

`csharp
public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)
`

`

`
?

`HotKey

` 创建 VM 实例?
### CreateFromHotKeyWithForcedName
`

`

`csharp
public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)
`

`

`
?

`HotKey

` 创建 VM，使用强制名称替代自动查找的名称?
### CreateFromForcedID
`

`

`csharp
public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)
`

`

`
使用强制 ID 和名称创?VM，不关联实际按键。用于自定义按键提示?
### SetForcedVisibility
`

`

`csharp
public void SetForcedVisibility(bool? isVisible)
`

`

`
设置强制可见性。传?

`null

` 恢复默认可见性逻辑?
## 使用示例
### 示例: 显示交互按键提示
**场景**: 在地图界面显??[空格] 暂停"的按键提示?

`

`

`csharp
public class MapHintVM : ViewModel
{
    public InputKeyItemVM PauseHint { get; set; }
    
    protected override void OnInitialize()
    {
        GameKey pauseKey = HotKeyManager.GetCategory("MapHotKeyCategory")
            .GetGameKey(63); // MapTimeTogglePause
        
        PauseHint = InputKeyItemVM.CreateFromGameKey(pauseKey, false);
    }
}
`

`

`
**要点**: VM 在构造时自动订阅 

`Input.OnGamepadActiveStateChanged

` 事件，手柄切换时自动刷新；`OnFinalize

` 中自动取消订阅；使用 

`CreateFromForcedID

` 可创建不绑定实际按键的自定义提示?
## 参见
- [完整类目录](../catalog-engine)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
