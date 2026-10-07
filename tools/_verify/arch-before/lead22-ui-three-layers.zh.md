---
title: "UI 三层架构"
description: "ScreenManager / GauntletLayer / ViewModel 三层职责边界与生命周期"
---

## 一句话定位

游戏 UI 由三层协作：**ScreenManager** 管理 Screen 栈的推送与弹出，**GauntletLayer** 是 Gauntlet UI 层的基类负责帧渲染与输入，**ViewModel** 是数据绑定层连接逻辑与视图。

## 心智模型

### 三层职责边界

| 层 | 类 | 职责 | 生命周期 |
|---|---|---|---|
| 栈管理层 | `ScreenManager` | 维护 Screen 栈，处理 Push/Pop，驱动 Tick/Render | 全局单例，贯穿游戏全程 |
| UI 层 | `GauntletLayer` | Gauntlet UI 的基类，管理 Widget 树、帧更新、输入分发 | 随 Screen 创建/销毁 |
| 数据层 | `ViewModel` | 数据绑定基类，通过 `OnPropertyChanged` 通知 View 刷新 | 随 Layer 创建，Screen 关闭时释放 |

### Screen 生命周期

1. **Push**：`ScreenManager.PushScreen(screen)` 将 Screen 压栈，调用 `screen.OnInitialize()`
2. **Tick**：每帧 `ScreenManager.Tick(dt)` 驱动栈顶 Screen 的 `OnTick(dt)`
3. **Render**：`ScreenManager.Render()` 驱动栈顶 Screen 的 `OnRender()`
4. **Pop**：`ScreenManager.PopScreen()` 弹栈，调用 `screen.OnFinalize()`

### ViewModel 与 View 绑定

- ViewModel 继承 `TaleWorlds.Library.ViewModel`
- 通过 `OnPropertyChanged(string propertyName)` 通知 View 属性变更
- View（Widget）通过数据绑定自动响应 `RefreshValues()`
- 自定义 VM 需重写 `RefreshValues()` 从游戏状态同步数据

### 何时用哪层

- **需要全屏 UI**：继承 `ScreenBase`，通过 `ScreenManager.PushScreen` 推入
- **需要 Gauntlet UI 组件**：继承 `GauntletLayer`，在 `Initialize` 中构建 Widget 树
- **需要数据绑定**：继承 `ViewModel`，在 Layer 中创建并绑定

## 真实最小示例

```csharp
// 自定义 ViewModel：绑定一个计数器
public class MyCounterViewModel : TaleWorlds.Library.ViewModel
{
    private int _count;
    public int Count
    {
        get => _count;
        set { _count = value; OnPropertyChanged(nameof(Count)); }
    }

    public void Increment() => Count++;
}

// 自定义 GauntletLayer：挂接 ViewModel
public class MyScreenLayer : TaleWorlds.Engine.GauntletUI.GauntletLayer
{
    private MyCounterViewModel _vm;
    public MyScreenLayer(int layerIndex = 0) : base(layerIndex) { }

    protected override void Tick(float dt)
    {
        base.Tick(dt);
        _vm = new MyCounterViewModel();
        // 将 VM 绑定到 Widget 树（实际项目通过 XML 绑定）
        this.SetViewModel(_vm);
    }
}

// 自定义 Screen：推入 ScreenManager
public class MyScreen : TaleWorlds.ScreenSystem.ScreenBase
{
    private MyScreenLayer _layer;
    public override void OnInitialize()
    {
        _layer = new MyScreenLayer();
        TaleWorlds.ScreenSystem.ScreenManager.Instance.PushScreen(this);
    }
}
```

### 关键源码位置

| 符号 | file:行号 | 该行实际内容 |
|---|---|---|
| `ScreenManager.PushScreen` | `ScreenManager.cs:608` | `public static void PushScreen(ScreenBase screen)` |
| `GauntletLayer.Tick` | `GauntletLayer.cs:188` | `protected override void Tick(float dt)` |
| `ViewModel.OnPropertyChanged` | `ViewModel.cs:249` | `public void OnPropertyChanged([CallerMemberName] string propertyName = null)` |

## 常见误用

1. **在 ViewModel 中直接操作 View**：VM 应只负责数据状态，View 操作应通过绑定或事件通知，直接引用 Widget 会破坏分层。
2. **忘记调用 `base.Tick(dt)`**：GauntletLayer 子类重写 `Tick` 时必须调用基类实现，否则帧更新链断裂。
3. **Screen 推入后未处理返回栈**：PushScreen 后若未在适当时机 PopScreen，会导致 Screen 栈泄漏和输入冲突。
4. **ViewModel 未重写 `RefreshValues()`**：自定义 VM 若未从游戏状态同步数据，View 显示的值会过时。

## 导航

- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel Decorator](../gamemodel-decorator) | [Mission 生命周期](../mission-lifecycle) | [战役事件系统](../campaign-event-system)
- 相关类页: `ScreenManager` / `ScreenBase` / `ScreenLayer`（代码片段；链接由后续补链 pass 统一处理）

## 节 schema 声明

本页用架构 hub 形态：一句话定位=概述；心智模型=心智模型；真实最小示例=怎么用+真实示例；常见误用=心智模型展开；导航=参见。
