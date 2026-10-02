---
title: "User32"
description: "Auto-generated class reference for User32."
---
# User32

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension.Standalone
**Type:** `public static class User32 `
**Base:** System.Object
**Source:** TaleWorlds.TwoDimension.Standalone/Native/Windows/User32.cs

## Overview

Auto-generated stub for `User32`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetAsyncKeyState
`public static extern short GetAsyncKeyState(int vkey)`

### DestroyWindow
`public static extern bool DestroyWindow(IntPtr hWnd)`

### GetDC
`public static extern IntPtr GetDC(IntPtr hWnd)`

### SetParent
`public static extern IntPtr SetParent(IntPtr child,IntPtr newParent)`

### ReleaseDC
`public static extern int ReleaseDC(IntPtr hWnd,IntPtr hDC)`

### ScreenToClient
`public static extern bool ScreenToClient(IntPtr hWnd,ref Point lpPoint)`

### GetCursorPos
`public static extern bool GetCursorPos(out Point lpPoint)`

### ReleaseCapture
`public static extern bool ReleaseCapture()`

### SetCapture
`public static extern IntPtr SetCapture(IntPtr hWnd)`

### SetActiveWindow
`public static extern IntPtr SetActiveWindow(IntPtr hWnd)`

### SetForegroundWindow
`public static extern bool SetForegroundWindow(IntPtr hWnd)`

### CreateWindowEx
`public static extern IntPtr CreateWindowEx(int dwExStyle,[MarshalAs(UnmanagedType.LPTStr)] string lpClassName,string lpWindowName,WindowStyle dwStyle,int x,int y,int nWidth,int nHeight,IntPtr hWndParent,IntPtr hMenu,IntPtr hInstance,IntPtr lpParam)`

### ShowWindow
`public static extern bool ShowWindow(IntPtr hWnd,WindowShowStyle nCmdShow)`

### IsIconic
`public static extern bool IsIconic(IntPtr hWnd)`

### CloseWindow
`public static extern bool CloseWindow(IntPtr hWnd)`

### PeekMessage
`public static extern bool PeekMessage(out NativeMessage lpMsg,[In] IntPtr hWnd,[In] uint wMsgFilterMin,[In] uint wMsgFilterMax,[In] uint wRemoveMsg)`

### TranslateMessage
`public static extern bool TranslateMessage([In] ref NativeMessage lpMsg)`

### DispatchMessage
`public static extern IntPtr DispatchMessage([In] ref NativeMessage lpMsg)`

### RegisterClass
`public static extern ushort RegisterClass([In] ref WindowClass lpWndClass)`

### UnregisterClass
`public static extern bool UnregisterClass([MarshalAs(UnmanagedType.LPTStr)] string lpClassName,IntPtr hInstance)`

### DefWindowProc
`public static extern IntPtr DefWindowProc(IntPtr hWnd,uint uMsg,IntPtr wParam,IntPtr lParam)`

### LoadCursorFromFile
`public static extern IntPtr LoadCursorFromFile(string lpFileName)`

### GetDesktopWindow
`public static extern IntPtr GetDesktopWindow()`

### MonitorFromWindow
`public static extern IntPtr MonitorFromWindow(IntPtr hwnd,uint dwFlags)`

### GetClientRect
`public static extern bool GetClientRect(IntPtr hWnd,out Rectangle lpRect)`

### GetWindowRect
`public static extern bool GetWindowRect(IntPtr hWnd,out Rectangle lpRect)`

### SetWindowPos
`public static extern bool SetWindowPos(IntPtr hWnd,IntPtr hWndInsertAfter,int X,int Y,int cx,int cy,uint uFlags)`

### MoveWindow
`public static extern bool MoveWindow(IntPtr hWnd,int X,int Y,int nWidth,int nHeight,bool bRepaint)`

### UpdateWindow
`public static extern bool UpdateWindow(IntPtr hWnd)`

### SetWindowLong
`public static extern int SetWindowLong(IntPtr hWnd,int nIndex,uint dwNewLong)`

### UpdateLayeredWindow
`public static extern bool UpdateLayeredWindow(IntPtr hWnd,IntPtr hdcDst,ref Point pptDst,ref Size psize,IntPtr hdcSrc,ref Point pprSrc,int crKey,ref BlendFunction pblend,int dwFlags)`

### GetMessage
`public static extern bool GetMessage(out NativeMessage lpMsg,IntPtr hWnd,uint wMsgFilterMin,uint wMsgFilterMax)`

### SendMessage
`public static extern int SendMessage(IntPtr hWnd,uint Msg,IntPtr wParam,IntPtr lParam)`

### MessageBox
`public static extern int MessageBox(IntPtr hWnd,string text,string caption,uint type)`

### EnumDisplayMonitors
`public static extern bool EnumDisplayMonitors(IntPtr hdc,IntPtr lprcClip,User32.MonitorEnumDelegate lpfnEnum,IntPtr dwData)`

### GetMonitorInfo
`public static extern bool GetMonitorInfo(IntPtr hMonitor,ref User32.MONITORINFOEX lpmi)`

### MonitorEnumDelegate
`public delegate bool MonitorEnumDelegate(IntPtr hMonitor,IntPtr hdcMonitor,ref User32.RECT lprcMonitor,IntPtr lParam)`

## See Also

- [Section index](../)
