---
title: Gauntlet UI System
description: Creating custom UI with GauntletMovie, GauntletSystem, ScreenManager
---

# Gauntlet UI System

**Namespace**: TaleWorlds.MountAndBlade.Gauntlet
**Related APIs**: `GauntletMovie`, `GauntletSystem`, `ScreenManager`, `ViewModel`

## Overview

Bannerlord uses **Gauntlet** as its UI framework. Gauntlet is a data-driven UI system based on XAML-style XML definitions and MVVM pattern data binding.

## Core Components

| Component | Class | Responsibility |
|-----------|-------|----------------|
| Movie/Screen | `GauntletMovie` | UI logic base class |
| UI System | `GauntletSystem` | Global UI manager |
| Screen Management | `ScreenManager` | Screen stack management |
| Data Binding | `ViewModel` | UI data carrier |

## Contents

1. [Creating GauntletMovie](#creating-gauntletmovie)
2. [GauntletMovie Lifecycle](#gauntletmovie-lifecycle)
3. [ScreenManager Usage](#screenmanager-usage)
4. [ViewModel Data Binding](#viewmodel-data-binding)
5. [Common UI Patterns](#common-ui-patterns)
6. [Complete Example](#complete-example)

---

## Creating GauntletMovie

### Basic Steps

1. **Create inherited class**

```csharp
using TaleWorlds.MountAndBlade.Gauntlet;

namespace MyModule.UI
{
    public class MyGauntletMovie : GauntletMovie
    {
        // Custom logic
    }
}
```

2. **Override OnCreate()**

```csharp
public override void OnCreate()
{
    base.OnCreate();
    
    // Register UI resources
    // Initialize data
}
```

3. **Override OnInvisible() / OnVisible()**

```csharp
public override void OnInvisible()
{
    // Called when screen becomes invisible
    // Pause animations, release resources
}

public override void OnVisible()
{
    // Called when screen becomes visible
    // Resume animations, refresh data
}
```

### Register Movie

Register in `SubModule`:

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    
    // Register Movie
    GauntletSystem.RegisterMovie<MyGauntletMovie>();
}
```

### Load UI from XML

UI definition files (.gui) go in `Guis/gauntlet/`:

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

Load XML:

```csharp
public override void OnCreate()
{
    base.OnCreate();
    
    // Load XML definition
    LoadMovie("MyUI", "MyModule.Guis.gauntlet.MyUI");
}
```

---

## GauntletMovie Lifecycle

```
ScreenManager.PushScreen<GauntletScreen>()
    │
    ├─► OnCreate()           ← Called on first creation
    │
    ├─► OnInitialState()     ← Initialize state
    │
    ├─► OnInvisible()        ← When invisible (repeated)
    │
    ├─► OnVisible()          ← When visible (repeated)
    │
    └─► OnFinalize()         ← Called on destroy
```

### Lifecycle Methods

| Method | When Called |
|--------|-------------|
| `OnCreate()` | Movie first created |
| `OnInitialState()` | Set initial UI state |
| `OnReadMediaFinished()` | Media finished loading |
| `OnInvisible()` | Movie becomes invisible |
| `OnVisible()` | Movie becomes visible |
| `OnFinalize()` | Movie destroyed |

---

## ScreenManager Usage

### Screen Stack Operations

```csharp
// Get ScreenManager instance
GauntletSystem gauntletSystem = GauntletSystem.Get();

// Push new screen
GauntletScreen<MyGauntletMovie> screen = 
    gauntletSystem.PushScreen<GauntletScreen<MyGauntletMovie>>();

// Pop screen
gauntletSystem.PopScreen();

// Replace current screen
gauntletSystem.ReplaceTopScreen<AnotherScreen>();
```

### Screen Class Definition

```csharp
public class MyScreen : GauntletScreen<MyGauntletMovie>
{
    public MyScreen()
    {
        // Load Movie in constructor
        LoadMovie();
    }
}
```

---

## ViewModel Data Binding

### Create ViewModel

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

### Bind ViewModel to Movie

```csharp
public override void OnCreate()
{
    base.OnCreate();
    
    // Create ViewModel
    MyViewModel viewModel = new MyViewModel();
    
    // Set data source
    SetViewModel(viewModel);
    
    // Or use generic version
    // SetViewModel<MyViewModel>();
}
```

### DataSourceProperty Attribute

```csharp
[DataSourceProperty]
public int Score { get; set; }

[DataSourceProperty]
public bool IsEnabled { get; set; }

[DataSourceProperty]
public List<string> Items { get; set; }
```

---

## Common UI Patterns

### Button Click Handling

```csharp
// In .gui XML
<ButtonWidget Id="MyButton" 
              OnClick="@OnMyButtonClicked" />

// In Movie
public override void OnCreated()
{
    base.OnCreated();
    
    // Get button
    ButtonWidget button = GetWidget<ButtonWidget>("MyButton");
    
    // Add click event (alternative to XML binding)
    button.ClickEventHandlers.Add(OnMyButtonClicked);
}

private void OnMyButtonClicked(ButtonWidget widget)
{
    // Handle click
}
```

### Lists/Grids

```csharp
// In ViewModel
[DataSourceProperty]
public List<ItemVM> Items { get; set; }

// In .gui
<ItemListWidget DataSource="@Items">
  <ItemTemplate>
    <TextWidget Text="@ItemName" />
  </ItemTemplate>
</ItemListWidget>
```

### Popup Dialogs

```csharp
InformationExtension.ShowPopup(
    "Title",                    // Title
    "Are you sure?",            // Content
    "Confirm",                  // Confirm button
    "Cancel",                   // Cancel button
    new Callback<>((arg) => {   // Confirm callback
        // Handle confirm
    }),
    new Callback<>((arg) => {   // Cancel callback
        // Handle cancel
    })
);
```

---

## Complete Example

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
            
            // Load XML definition
            LoadMovie("MyUI", "MyModule.Guis.gauntlet.MyUI");
            
            // Set ViewModel
            SetViewModel(new MyViewModel());
        }
        
        public override void OnVisible()
        {
            base.OnVisible();
            
            // Refresh data
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

## Related Documentation

- [GauntletMovie API](../api/gui/GauntletMovie.md)
- [GauntletSystem API](../api/gui/GauntletSystem.md)
- [ScreenManager API](../api/gui/ScreenManager.md)
- [ViewModel API](../api/viewmodel/ViewModel.md)

---

## Next Section

- [Mission System](./mission-system.md) - Learn Mission, MissionBehavior
- [Campaign System](./campaign-system.md) - Learn about the Campaign game world
