package com.stefanovskyi.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/student")
public class StudentController {

    @RequestMapping("/")
    @ResponseBody
    private String getAllStudents() {
        return "Test all students";
    }
}
