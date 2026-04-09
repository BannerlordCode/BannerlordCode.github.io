---
title: 入门指南 / Getting Started Guide
description: 快速上手 Bannerlord 模块开发 / Quick start guide for Bannerlord modding
---

# 入门指南 / Getting Started Guide

欢迎来到 Bannerlord 模块开发入门指南。本指南将帮助你搭建开发环境、创建第一个 SubModule 并掌握调试技巧。

## 目录 / Table of Contents

1. [环境搭建 / Environment Setup](#环境搭建)
2. [项目结构 / Project Structure](#项目结构)
3. [第一个 SubModule / Your First SubModule](#第一个-submodule)
4. [调试技巧 / Debugging Tips](#调试技巧)
5. [常见问题 / FAQ](#常见问题)

---

## 进阶指南 / Advanced Topics

6. [Gauntlet UI 系统](./gauntlet-ui.md) - 使用 GauntletMovie、GauntletSystem、ScreenManager 创建自定义UI
7. [任务系统](./mission-system.md) - Mission、MissionBehavior、Agent、Formation、Team
8. [战役系统](./campaign-system.md) - MobileParty、Kingdom、Clan、Settlement
9. [存档系统](./save-system-guide.md) - v1.3.15 全新的 SaveSystem 使用指南
10. [资源管线](./asset-pipeline.md) - 添加自定义网格、纹理、音效
11. [本地化](./localization.md) - MBTextManager 多语言支持
12. [常见模式](./common-patterns.md) - Bannerlord modding 最佳实践
13. [游戏系统概述](./game-systems-overview.md) - 哪些内容可以自定义
14. [故障排除](./troubleshooting.md) - 扩展调试场景

---

## 环境搭建 / Environment Setup

### 系统要求 / System Requirements

| 要求 | 最低配置 | 推荐配置 |
|------|----------|----------|
| 操作系统 | Windows 10 | Windows 11 |
| 内存 | 8GB RAM | 16GB RAM |
| 硬盘 | 50GB 可用空间 | 100GB SSD |
| .NET | .NET Framework 4.7.2 | .NET Framework 4.8 |

### 安装步骤 / Installation Steps

1. **安装 Visual Studio 2022**
   - 下载 [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/)
   - 安装时选择 `.NET desktop development` 工作负载

2. **安装 TaleWorlds.Modding SDK**
   ```bash
   # 克隆 SDK 仓库
   git clone https://github.com/BannerlordCoop/modding-sdk.git
   
   # 打开解决方案
   cd modding-sdk
   .\setup.bat
   ```

3. **配置游戏路径**
   - 在 Visual Studio 中打开 `Module Manager`
   - 设置 `Mount & Blade II Bannerlord` 安装路径
   - 默认路径: `C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord`

### 验证安装 / Verify Installation

启动游戏，在主菜单选择 `Modules` → 确认你的模块出现在列表中。

---

## 项目结构 / Project Structure

一个标准的 Bannerlord 模块项目结构：

```
MyModule/
├── MyModule.dll              # 编译后的模块文件
├── SubModule.xml             # 模块配置文件 ⭐重要
├── ModuleData/
│   └── lang/                 # 语言文件
│       └── strings.txt
├── Assets/                   # 资源文件
│   ├── meshes/              # 模型文件
│   ├── textures/            # 纹理文件
│   └── sounds/             # 音效文件
├── Guis/                    # UI 文件
│   └── gauntlet/
└── CSharpScripts/            # C# 脚本（如果使用）
```

### SubModule.xml 详解

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="MyModule"/>
  <Version value="1.0.0"/>
  <DefaultModule>
    <Xmls>
      <XmlNode path="ModuleData/my_config"/>
    </Xmls>
  </DefaultModule>
</Module>
```

**关键元素：**
- `<Name>` - 模块显示名称
- `<Version>` - 模块版本
- `<Xmls>` - 加载的 XML 配置

---

## 第一个 SubModule / Your First SubModule

### 创建项目

1. 在 Visual Studio 中创建新的 `Class Library (.NET Framework)` 项目
2. 添加以下 NuGet 包：
   ```powershell
   Install-Package TaleWorlds.Core
   Install-Package TaleWorlds.MountAndBlade
   Install-Package TaleWorlds.Library
   ```

### 创建 SubModule 类

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule
{
    // ⭐ 关键：继承 MBSubModuleBase
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            
            // 模块加载时调用
            // 用于初始化资源、注册事件等
        }

        protected override void OnGameStartGame(Game game, GameStarter gameStarter)
        {
            base.OnGameStartGame(game, gameStarter);
            
            // 游戏开始时调用
            // 添加行为、初始化游戏逻辑等
        }
    }
}
```

### 注册 SubModule

修改 `SubModule.xml`：

```xml
<Module>
  <Dlls>
    <DllInfo>
      <AssemblyFile>MyModule.dll</AssemblyFile>
      <SubModuleClassType>MyModule.MySubModule</SubModuleClassType>
    </DllInfo>
  </Dlls>
</Module>
```

### 常用 API 示例

```csharp
// 获取游戏实例
Game game = Game.Current;

// 创建新物品
ItemObject newItem = ItemObject.CreateItem("my_item");

// 添加到游戏世界
game.ItemRoster.Add(newItem);

// 监听事件
game.GameStarted += OnGameStarted;

// 输出调试信息
InformationMessage message = new InformationMessage("Hello from MyModule!");
MBInformationManager.AddQuickInformation(message);
```

---

## 调试技巧 / Debugging Tips

### 使用断点调试

1. 在 Visual Studio 中打开游戏解决方案
2. 在目标代码处设置断点 (F9)
3. 按 `F5` 启动调试
4. 游戏将在断点处暂停

### 输出调试信息

```csharp
// 方法1: 使用 Debug.Print
Debug.Print("Debug message here", Debug.Color.White);

// 方法2: 使用 InformationManager
MBInformationManager.AddQuickInformation(
    new InformationMessage("Info text", Debug.Color.Blue)
);

// 方法3: 写入日志文件
File.WriteAllText("debug_log.txt", "content");
```

### 常见调试场景

| 场景 | 方法 |
|------|------|
| 模块未加载 | 检查 `SubModule.xml` 路径和类名 |
| XML 解析错误 | 使用 XML 验证工具检查语法 |
| 游戏崩溃 | 查看 `rgl_log.txt` 日志 |
| 资源缺失 | 确认资源路径和文件名大小写 |

### 日志文件位置

```
C:\Users\<用户名>\Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt
```

### Module Manager 调试

在游戏中按 `F12` 打开 Module Manager，可以：
- 查看所有已加载模块
- 检查模块依赖
- 诊断加载失败原因

---

## 常见问题 / FAQ

### Q: 模块不显示在列表中？

检查：
1. `SubModule.xml` 是否在正确位置
2. DLL 是否已编译
3. 类名是否与 XML 中匹配
4. 是否缺少必需的依赖模块

### Q: 游戏启动时报错？

查看 `rgl_log.txt` 获取详细错误信息。常见原因：
- XML 语法错误
- 缺少资源文件
- DLL 依赖缺失

### Q: 如何发布模块？

1. 确保 `SubModule.xml` 中的版本号正确
2. 压缩整个模块文件夹
3. 上传到 Mod 论坛或 Steam Workshop

### Q: 支持多人游戏吗？

Bannerlord 原生支持多人。需要：
- 在 `MultiplayerModule` 中实现 `MPEventReceiver`
- 同步必要的数据

---

## 下一步 / Next Steps

- 查看 [Gauntlet UI 系统](./gauntlet-ui.md) - 创建自定义界面
- 查看 [任务系统](./mission-system.md) - 自定义战斗和任务
- 查看 [战役系统](./campaign-system.md) - 修改世界地图玩法
- 查看 [存档系统](./save-system-guide.md) - 确保你的数据正确保存
- 查看 [API 参考](../api/) 了解可用接口
- 查看 [XML 参考](../xml-reference/) 学习配置格式
- 查看 [架构文档](../architecture/) 了解系统设计

---

## 常见问题 / FAQ

### Q: 模块不显示在列表中？

检查：
1. `SubModule.xml` 是否在正确位置
2. DLL 是否已编译
3. 类名是否与 XML 中匹配
4. 是否缺少必需的依赖模块

### Q: 游戏启动时报错？

查看 `rgl_log.txt` 获取详细错误信息。常见原因：
- XML 语法错误
- 缺少资源文件
- DLL 依赖缺失

### Q: 如何发布模块？

1. 确保 `SubModule.xml` 中的版本号正确
2. 压缩整个模块文件夹
3. 上传到 Mod 论坛或 Steam Workshop

### Q: 支持多人游戏吗？

Bannerlord 原生支持多人。需要：
- 在 `MultiplayerModule` 中实现 `MPEventReceiver`
- 同步必要的数据

### Q: 如何创建自定义 UI？

使用 Gauntlet UI 系统：
1. 创建继承 `GauntletMovie` 的类
2. 在 `OnCreate()` 中定义 UI 结构
3. 通过 `ScreenManager.PushScreen()` 显示

### Q: 如何添加自定义物品？

两种方式：
1. **XML 定义**：在 `ModuleData/` 下创建 XML 文件
2. **代码创建**：使用 `ItemObject.CreateItem()` 动态创建

### Q: 如何让我的修改兼容存档？

使用 TaleWorlds.SaveSystem：
1. 用 `[SaveableClass]` 标记你的类
2. 用 `[SaveableField]` 或 `[SaveableProperty]` 标记需要保存的成员
3. 在 `CampaignGameStarter` 中注册

### Q: v1.3.15 和 v1.3.0 有什么区别？

| 特性 | v1.3.0 | v1.3.15 |
|------|--------|---------|
| SaveSystem | 内联实现 | 独立 TaleWorlds.SaveSystem |
| 异步加载 | 部分支持 | 完整支持 |
| 新增模块 | 23个 | 47个 (+24) |

新项目推荐使用 v1.3.15。

---

## 相关链接

- [Bannerlord Modding Discord](https://discord.gg/bannerlord)
- [Official Modding Forum](https://forums.taleworlds.com/)
