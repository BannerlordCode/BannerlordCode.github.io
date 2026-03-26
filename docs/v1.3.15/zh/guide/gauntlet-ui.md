---
title: Gauntlet UI 系统 / Gauntlet UI System
description: 使用 GauntletMovie、GauntletSystem、ScreenManager 创建自定义 UI / Creating custom UI with GauntletMovie, GauntletSystem, ScreenManager
---

# Gauntlet UI 系统 / Gauntlet UI System

**Namespace**: TaleWorlds.MountAndBlade.Gauntlet
**Related APIs**: `GauntletMovie`, `GauntletSystem`, `ScreenManager`, `ViewModel`

## 概述 / Overview

Bannerlord 使用 **Gauntlet** 作为其 UI 框架。Gauntlet 是一个数据驱动的 UI 系统，基于 XAML 风格的 XML 定义和 MVVM 模式的数据绑定。

Bannerlord uses **Gauntlet** as its UI framework. Gauntlet is a data-driven UI system based on XAML-style XML definitions and MVVM pattern data binding.

## 核心组件 / Core Components

| 组件 | 类 | 职责 |
|------|-----|------|
| 电影/屏幕 | `GauntletMovie` | UI 逻辑基类 |
| UI 系统 | `GauntletSystem` | 全局 UI 管理器 |
| 屏幕管理 | `ScreenManager` | 屏幕栈管理 |
| 数据绑定 | `ViewModel` | UI 数据载体 |

## 目录 / Contents

1. [创建 GauntletMovie](#创建-gauntletmovie)
2. [GauntletMovie 生命周期](#gauntletmovie-生命周期)
3. [ScreenManager 用法](#screenmanager-用法)
4. [ViewModel 数据绑定](#viewmodel-数据绑定)
5. [常见 UI 模式](#常见-ui-模式)
6. [完整示例](#完整示例)

---

## 创建 GauntletMovie

### 基本步骤

1. **创建继承类**

```csharp
using TaleWorlds.MountAndBlade.Gauntlet;

namespace MyModule.UI
{
    public class MyGauntletMovie : GauntletMovie
    {
        // 自定义逻辑
    }
}
```

2. **重写 OnCreate()**

```csharp
public override void OnCreate()
{
    base.OnCreate();
    
    // 注册 UI 资源
    // 初始化数据
}
```

3. **重写 OnInvisible() / OnVisible()**

```csharp
public override void OnInvisible()
{
    // 屏幕不可见时调用
    // 暂停动画、释放资源
}

public override void OnVisible()
{
    // 屏幕可见时调用
    // 恢复动画、刷新数据
}
```

### 注册 Movie

在 `SubModule` 中注册：

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    
    // 注册 Movie
    GauntletSystem.RegisterMovie<MyGauntletMovie>();
}
```

### 从 XML 加载 UI

UI 定义文件 (.gui) 放在 `Guis/gauntlet/` 目录下：

```xml
<!-- MyUI.gui -->
<GauntletMovie>
  <Canvas Width="1920" Height="1080">
    <Widget Width="400" Height="300" 
            HorizontalAlignment="Center" 
            VerticalAlignment="Center">
      <TextWidget Text="@MyText" />
      <ButtonWidget Id="MyButton" 
                    DoNotPassEventsToChildren="true"
                    OnClick="@OnButtonClick" />
    </Widget>
  </Canvas>
</GauntletMovie>
```

加载 XML：

```csharp
public override void OnCreate()
{
    base.OnCreate();
    
    // 加载 XML 定义
    LoadMovie("MyUI", "MyModule.Guis.gauntlet.MyUI");
}
```

---

## GauntletMovie 生命周期

```
ScreenManager.PushScreen<GauntletScreen>()
    │
    ├─► OnCreate()           ← 第一次创建时调用
    │
    ├─► OnInitialState()     ← 初始化状态
    │
    ├─► OnInvisible()        ← 不可见时（反复）
    │
    ├─► OnVisible()          ← 可见时（反复）
    │
    └─► OnFinalize()         ← 销毁时调用
```

### 生命周期方法

| 方法 | 调用时机 |
|------|----------|
| `OnCreate()` | Movie 第一次创建 |
| `OnInitialState()` | 设置初始 UI 状态 |
| `OnReadMediaFinished()` | 媒体加载完成 |
| `OnInvisible()` | Movie 变为不可见 |
| `OnVisible()` | Movie 变为可见 |
| `OnFinalize()` | Movie 销毁 |

---

## ScreenManager 用法

### 屏幕栈操作

```csharp
// 获取 ScreenManager 实例
GauntletSystem gauntletSystem = GauntletSystem.Get();

// 压入新屏幕
GauntletScreen<MyGauntletMovie> screen = 
    gauntletSystem.PushScreen<GauntletScreen<MyGauntletMovie>>();

// 弹出屏幕
gauntletSystem.PopScreen();

// 替换当前屏幕
gauntletSystem.ReplaceTopScreen<AnotherScreen>();
```

### 屏幕类定义

```csharp
public class MyScreen : GauntletScreen<MyGauntletMovie>
{
    public MyScreen()
    {
        // 构造函数中加载 Movie
        LoadMovie();
    }
}
```

---

## ViewModel 数据绑定

### 创建 ViewModel

```csharp
using TaleWorlds.MountAndBlade.ViewModel;

namespace MyModule.UI
{
    public class MyViewModel : ViewModel
    {
        private string _myText;
        
        [DataSourceProperty]
        public string MyText
        {
            get => _myText;
            set
            {
                if (_myText != value)
                {
                    _myText = value;
                    OnPropertyChanged(nameof(MyText));
                }
            }
        }
        
        public MyViewModel()
        {
            _myText = "Hello, Bannerlord!";
        }
        
        public void OnButtonClick()
        {
            MyText = "Button clicked!";
        }
    }
}
```

### 绑定 ViewModel 到 Movie

```csharp
public override void OnCreate()
{
    base.OnCreate();
    
    // 创建 ViewModel
    MyViewModel viewModel = new MyViewModel();
    
    // 设置数据源
    SetViewModel(viewModel);
    
    // 或使用泛型版本
    // SetViewModel<MyViewModel>();
}
```

### DataSourceProperty 特性

```csharp
[DataSourceProperty]
public int Score { get; set; }

[DataSourceProperty]
public bool IsEnabled { get; set; }

[DataSourceProperty]
public List<string> Items { get; set; }
```

---

## 常见 UI 模式

### 按钮点击处理

```csharp
// 在 .gui XML 中
<ButtonWidget Id="MyButton" 
              OnClick="@OnMyButtonClicked" />

// 在 Movie 中
public override void OnCreated()
{
    base.OnCreated();
    
    // 获取按钮
    ButtonWidget button = GetWidget<ButtonWidget>("MyButton");
    
    // 添加点击事件（替代 XML 绑定）
    button.ClickEventHandlers.Add(OnMyButtonClicked);
}

private void OnMyButtonClicked(ButtonWidget widget)
{
    // 处理点击
}
```

### 列表/网格

```csharp
// ViewModel 中
[DataSourceProperty]
public List<ItemVM> Items { get; set; }

// 在 .gui 中
<ItemListWidget DataSource="@Items">
  <ItemTemplate>
    <TextWidget Text="@ItemName" />
  </ItemTemplate>
</ItemListWidget>
```

### 弹出对话框

```csharp
InformationExtension.ShowPopup(
    "Title",                    // 标题
    "Are you sure?",            // 内容
    "Confirm",                  // 确定按钮
    "Cancel",                   // 取消按钮
    new Callback<>((arg) => {   // 确定回调
        // 处理确认
    }),
    new Callback<>((arg) => {   // 取消回调
        // 处理取消
    })
);
```

---

## 完整示例

### MyModule.UI/MyScreen.cs

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Gauntlet;
using TaleWorlds.MountAndBlade.ViewModel;

namespace MyModule.UI
{
    public class MyScreen : GauntletScreen<MyMovie>
    {
        public MyScreen()
        {
            LoadMovie();
        }
    }
}
```

### MyModule.UI/MyMovie.cs

```csharp
using TaleWorlds.MountAndBlade.Gauntlet;

namespace MyModule.UI
{
    public class MyMovie : GauntletMovie
    {
        public override void OnCreate()
        {
            base.OnCreate();
            
            // 加载 XML 定义
            LoadMovie("MyUI", "MyModule.Guis.gauntlet.MyUI");
            
            // 设置 ViewModel
            SetViewModel(new MyViewModel());
        }
        
        public override void OnVisible()
        {
            base.OnVisible();
            
            // 刷新数据
            RefreshBindings();
        }
    }
}
```

### MyModule.UI/MyViewModel.cs

```csharp
using TaleWorlds.MountAndBlade.ViewModel;

namespace MyModule.UI
{
    public class MyViewModel : ViewModel
    {
        private string _welcomeText;
        private int _clickCount;
        
        [DataSourceProperty]
        public string WelcomeText
        {
            get => _welcomeText;
            set => SetField(ref _welcomeText, value, nameof(WelcomeText));
        }
        
        [DataSourceProperty]
        public int ClickCount
        {
            get => _clickCount;
            set => SetField(ref _clickCount, value, nameof(ClickCount));
        }
        
        public MyViewModel()
        {
            _welcomeText = "Welcome to My Module!";
            _clickCount = 0;
        }
        
        public void OnIncrementClicked()
        {
            ClickCount++;
        }
        
        public void OnDecrementClicked()
        {
            ClickCount--;
        }
    }
}
```

### MyModule.UI/MyUI.guidata

```xml
<MyUI>
  <Canvas Width="800" Height="600">
    <Widget Width="Size.FitChildren" 
            Height="Size.FitChildren"
            HorizontalAlignment="Center"
            VerticalAlignment="Center">
      
      <!-- Welcome Text -->
      <TextWidget Id="WelcomeText"
                  Text="@WelcomeText"
                  Width="300"
                  Height="50" />
      
      <!-- Click Counter -->
      <TextWidget Id="Counter"
                  Text="Count: @ClickCount"
                  Width="200"
                  Height="40"
                  PositionY="60" />
      
      <!-- Buttons -->
      <ButtonWidget Id="IncrementBtn"
                    Width="100"
                    Height="40"
                    PositionY="120"
                    Text="+"
                    OnClick="@OnIncrementClicked" />
      
      <ButtonWidget Id="DecrementBtn"
                    Width="100"
                    Height="40"
                    PositionX="110"
                    PositionY="120"
                    Text="-"
                    OnClick="@OnDecrementClicked" />
      
    </Widget>
  </Canvas>
</MyUI>
```

---

## 相关文档 / Related Documentation

- [GauntletMovie API](../api/gui/GauntletMovie.md)
- [GauntletSystem API](../api/gui/GauntletSystem.md)
- [ScreenManager API](../api/gui/ScreenManager.md)
- [ViewModel API](../api/viewmodel/ViewModel.md)

---

## 下一节 / Next Section

- [任务系统](./mission-system.md) - 学习 Mission、MissionBehavior
- [战役系统](./campaign-system.md) - 学习 Campaign 游戏世界
