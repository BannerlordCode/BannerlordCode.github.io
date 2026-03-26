---
title: 入门指南 / Getting Started Guide
description: 快速上手 Bannerlord v1.3.0 模块开发 / Quick start guide for Bannerlord modding v1.3.0
---

# 入门指南 / Getting Started Guide

欢迎来到 Bannerlord v1.3.0 模块开发入门指南。本指南涵盖 v1.3.0 版本的基础内容。

::: warning 注意
v1.3.0 是 v1.3.15 之前的版本。部分 API 可能与新版本不同。建议使用 v1.3.15 进行新项目开发。
:::

## 目录 / Table of Contents

1. [环境搭建 / Environment Setup](#环境搭建)
2. [项目结构 / Project Structure](#项目结构)
3. [第一个 SubModule / Your First SubModule](#第一个-submodule)
4. [调试技巧 / Debugging Tips](#调试技巧)
5. [版本差异 / Version Differences](#版本差异)

---

## 进阶指南 / Advanced Topics

> 注意：v1.3.0 部分 API 与 v1.3.15 不同，请参考 [v1.3.15 指南](../../v1.3.15/zh/guide/) 获取更完整的内容。

6. [Mission 系统基础](./mission-basics.md) - Mission、MissionBehavior 入门
7. [Campaign 系统基础](./campaign-basics.md) - MobileParty、Kingdom 入门
8. [UI 系统基础](./ui-basics.md) - GauntletMovie 入门
9. [存档系统](./save-system.md) - v1.3.0 存档实现
10. [常见问题](./common-issues.md) - 常见错误和解决方案

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

1. **安装 Visual Studio 2019/2022**
   - 下载 [Visual Studio](https://visualstudio.microsoft.com/downloads/)
   - 选择 `.NET desktop development` 工作负载

2. **安装 TaleWorlds.Modding SDK**
   ```bash
   git clone https://github.com/BannerlordCoop/modding-sdk.git
   cd modding-sdk
   .\setup.bat
   ```

3. **配置游戏路径**
   - 打开 `Module Manager`
   - 设置游戏安装路径

### 验证安装 / Verify Installation

启动游戏，确认模块出现在列表中。

---

## 项目结构 / Project Structure

```
MyModule/
├── MyModule.dll              # 编译后的模块文件
├── SubModule.xml             # 模块配置文件
├── ModuleData/
│   └── lang/
│       └── strings.txt
├── Assets/
│   ├── meshes/
│   ├── textures/
│   └── sounds/
└── Guis/
    └── gauntlet/
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

---

## 第一个 SubModule / Your First SubModule

### 创建项目

1. 在 Visual Studio 中创建 `Class Library (.NET Framework)` 项目
2. 添加 NuGet 包：
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
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
        }

        protected override void OnGameStartGame(Game game, GameStarter gameStarter)
        {
            base.OnGameStartGame(game, gameStarter);
        }
    }
}
```

### 注册 SubModule

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

---

## 调试技巧 / Debugging Tips

### 断点调试

1. 在 Visual Studio 设置断点 (F9)
2. 按 `F5` 启动调试

### 输出调试信息

```csharp
Debug.Print("Debug message");
MBInformationManager.AddQuickInformation(
    new InformationMessage("Info text")
);
```

### 日志文件位置

```
C:\Users\<用户名>\Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt
```

---

## 版本差异 / Version Differences

### v1.3.0 vs v1.3.15 主要差异

| 功能 | v1.3.0 | v1.3.15 |
|------|--------|----------|
| SaveSystem | 内联实现 | 独立 TaleWorlds.SaveSystem |
| 异步加载 | 部分支持 | 完整支持 |
| [Obsolete] 标记 | 较少 | 较多 |

### 升级建议

- 新项目推荐使用 v1.3.15
- 现有 v1.3.0 项目可继续维护
- 升级前请查阅 [API 参考](../../api/)

---

## 下一步 / Next Steps

- 查看 [Mission 系统基础](./mission-basics.md) - 学习 Mission 和 MissionBehavior
- 查看 [Campaign 系统基础](./campaign-basics.md) - 学习世界地图逻辑
- 查看 [UI 系统基础](./ui-basics.md) - 学习 Gauntlet UI
- 查看 [API 参考](../../api/) 了解可用接口
- 查看 [XML 参考](../../xml-reference/) 学习配置格式
- 查看 [架构文档](../../architecture/) 了解系统设计
- 推荐使用 [v1.3.15 指南](../../v1.3.15/zh/guide/) 获取更完整的内容

---

## 常见问题 / FAQ

### Q: 模块不显示在列表中？

检查：
1. `SubModule.xml` 是否在正确位置
2. DLL 是否已编译
3. 类名是否与 XML 中匹配

### Q: v1.3.0 和 v1.3.15 哪个好？

| 特性 | v1.3.0 | v1.3.15 |
|------|--------|---------|
| SaveSystem | 内联实现 | 独立 TaleWorlds.SaveSystem |
| 稳定性 | 稳定 | 较新 |
| Mod 兼容性 | 取决于 Mod | 取决于 Mod |

新项目推荐 v1.3.15。

### Q: 如何升级到 v1.3.15？

1. 检查 v1.3.15 的 API 变化
2. 如果使用了 TaleWorlds.SaveSystem，需要重新实现
3. 测试所有功能
